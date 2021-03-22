import { omit } from 'lodash';

const UPLOAD_CREATIVE_REQUEST = 'UPLOAD/UPLOAD_CREATIVE_REQUEST';
const UPLOAD_CREATIVE_SUCCESS = 'UPLOAD/UPLOAD_CREATIVE_SUCCESS';
const UPLOAD_CREATIVE_FAILURE = 'UPLOAD/UPLOAD_CREATIVE_FAILURE';
function uploadCreative(uploadObj, uploadKey, attachmentType) {
  return {
    type: UPLOAD_CREATIVE_REQUEST,
    loading: true,
    uploadObj,
    uploaded: false,
    uploadKey,
    attachmentType,
  };
}
function uploadCreativeSuccess(uploadKey) {
  return { type: UPLOAD_CREATIVE_SUCCESS, loading: false, error: false, uploaded: true, uploadKey };
}
function uploadCreativeFailure(errorMessage, errorStatus, uploadKey) {
  return {
    type: UPLOAD_CREATIVE_FAILURE,
    loading: false,
    error: true,
    errorStatus,
    uploaded: false,
    errorMessage,
    uploadKey,
  };
}

const LOAD_S3URL_REQUEST = 'UPLOAD/LOAD_S3URL_REQUEST';
const LOAD_S3URL_SUCCESS = 'UPLOAD/LOAD_S3URL_SUCCESS';
const LOAD_S3URL_FAILURE = 'UPLOAD/LOAD_S3URL_FAILURE';

function loadS3Url(filename, uploadKey, attachmentType) {
  return { type: LOAD_S3URL_REQUEST, loading: true, filename, uploadKey, attachmentType };
}
function loadS3UrlSuccess(s3Url, uploadKey, attachmentType) {
  return {
    type: LOAD_S3URL_SUCCESS,
    s3Url,
    loading: false,
    error: false,
    uploadKey,
    attachmentType,
  };
}
function loadS3UrlFailure(errorMessage, errorStatus, uploadKey, attachmentType) {
  return {
    type: LOAD_S3URL_FAILURE,
    loading: false,
    error: true,
    errorMessage,
    errorStatus,
    uploadKey,
    attachmentType,
  };
}

const UPDATE_UPLOADED_FILE = 'UPLOAD/UPDATE_UPLOADED_FILE';
function updateFile(uploadKey, updateProps) {
  return { type: UPDATE_UPLOADED_FILE, updateProps, uploadKey };
}

const DEFAULT_CREATIVE = 'UPLOAD/DEFAULT_CREATIVE';
function setDefaultCreative(uploadKey, creative) {
  return { type: DEFAULT_CREATIVE, uploadKey, creative };
}

const REMOVE_FILE = 'UPLOAD/REMOVE_FILE';

function removeFile(uploadKey) {
  return { type: REMOVE_FILE, uploadKey };
}

const RESET_UPLOAD = 'UPLOAD/RESET_UPLOAD';

function resetUpload(uploadKey) {
  return { type: RESET_UPLOAD, uploadKey };
}

const initalState = {};
export default function uploadReducer(state = initalState, action) {
  switch (action.type) {
    case UPLOAD_CREATIVE_REQUEST:
    case UPLOAD_CREATIVE_SUCCESS:
    case UPLOAD_CREATIVE_FAILURE: {
      const { uploadKey } = action;
      const payload = omit(action, ['type', 'uploadKey']);
      const newState = { ...state };
      newState[uploadKey] = { ...newState[uploadKey], file: payload };
      return newState;
    }
    case LOAD_S3URL_REQUEST:
    case LOAD_S3URL_FAILURE:
    case LOAD_S3URL_SUCCESS: {
      const { uploadKey } = action;
      const payload = omit(action, ['type', 'uploadKey']);
      const newState = { ...state };
      newState[uploadKey] = { ...newState[uploadKey], fileData: payload };
      return newState;
    }
    case REMOVE_FILE: {
      const { uploadKey } = action;
      return {
        ...state,
        [uploadKey]: { ...state[uploadKey], file: null, fileData: null, extraData: null,
        },
      };
    }
    case DEFAULT_CREATIVE: {
      // Right now only have support for one file
      const { uploadKey, creative } = action;
      return { ...state,
        [uploadKey]: {
          fileData: { s3Url: creative[0] },
          extraData: {
            file_size: creative[0].size,
            file_type: creative[0].file_type },
        } };
    }
    case RESET_UPLOAD: {
      const { uploadKey } = action;
      const newState = { ...state };
      delete newState[uploadKey];

      return newState;
    }
    case UPDATE_UPLOADED_FILE: {
      const { updateProps, uploadKey } = action;

      return { ...state, [uploadKey]: { ...state[uploadKey], extraData: updateProps } };
    }
    default:
      return state;
  }
}

export const actionTypes = {
  UPLOAD_CREATIVE_FAILURE,
  UPLOAD_CREATIVE_SUCCESS,
  UPLOAD_CREATIVE_REQUEST,
  LOAD_S3URL_REQUEST,
  LOAD_S3URL_SUCCESS,
  LOAD_S3URL_FAILURE,
};

export const actions = {
  uploadCreative,
  uploadCreativeSuccess,
  uploadCreativeFailure,
  loadS3Url,
  loadS3UrlFailure,
  loadS3UrlSuccess,
  removeFile,
  resetUpload,
  setDefaultCreative,
  updateFile,
};
