import { call, takeLatest, put, select } from 'redux-saga/effects';
import { actions, actionTypes } from './modules';
import { fetchSaga, run } from 'store/sagas';
import { getUploadValues } from './selectors';
import { orgSelector } from 'modules/user/selectors';
import requestUpload from 'superagent';

const {
  uploadCreativeSuccess,
  uploadCreativeFailure,
  loadS3Url,
  loadS3UrlSuccess,
  loadS3UrlFailure,
} = actions;
const {
  UPLOAD_CREATIVE_REQUEST,
  LOAD_S3URL_REQUEST,
  LOAD_S3URL_SUCCESS,
  LOAD_S3URL_FAILURE,
} = actionTypes;

function* uploadCreativeSaga(action) {
  const { uploadObj, uploadKey, attachmentType } = action;
  try {
    yield run(
      () => loadS3Url(uploadObj.file.name, uploadKey, attachmentType),
      LOAD_S3URL_SUCCESS,
      LOAD_S3URL_FAILURE
    );
    const s3Url = (yield select(getUploadValues(uploadKey))).fileData.s3Url;
    const resp = yield requestUpload
      .put(s3Url.signed_url)
      .type(uploadObj.type)
      .send(uploadObj.file)
      .on('progress', (event) => {
        uploadObj.onProgress(event);
      })
      .then(
        (success) => success.body,
        (failure) => {
          throw new Error(failure.statusCode);
        }
      );
    yield put(uploadCreativeSuccess(uploadKey));
    uploadObj.onSuccess(resp);
  } catch (e) {
    uploadObj.onError(e);
    yield put(uploadCreativeFailure(e, e, uploadKey));
  }
}

function* loadS3UrlSaga(request, action) {
  const { filename, uploadKey, attachmentType } = action;
  try {
    const orgId = yield select(orgSelector);
    const endpoint = `org/${orgId}/s3url/?filename=${filename}&attachment_type=${attachmentType}`;
    const s3url = yield call(request, endpoint);
    yield put(loadS3UrlSuccess(s3url, uploadKey));
  } catch (e) {
    yield put(loadS3UrlFailure(e.toString(), e, uploadKey));
  }
}

function* watchUploadCreative() {
  yield takeLatest(UPLOAD_CREATIVE_REQUEST, uploadCreativeSaga);
}

function* watchLoadS3Url(request) {
  yield takeLatest(LOAD_S3URL_REQUEST, loadS3UrlSaga, request);
}
export default [watchUploadCreative, fetchSaga(watchLoadS3Url)];
