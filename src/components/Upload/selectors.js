import { createSelector } from 'reselect';
import { get } from 'lodash';

export const getUploadValues = (uploadKey) => (state) => state.upload[uploadKey];

export const isFileUploaded = (uploadKey) =>
  createSelector(
    getUploadValues(uploadKey),
    (uploadValue) => get(uploadValue, 'file.uploaded') || false
  );

export const isFileLoading = (uploadKey) =>
  createSelector(
    getUploadValues(uploadKey),
    (uploadValue) => get(uploadValue, 'file.loading') || false
  );

export const fileHasError = (uploadKey) =>
  createSelector(
    getUploadValues(uploadKey),
    (uploadValue) => get(uploadValue, 'file.error') || false
  );

export const getFileListSelectorFactory = (uploadKey) =>
  createSelector(getUploadValues(uploadKey), (uploadValue) => {
    if (get(uploadValue, 'file.uploaded') || get(uploadValue, 'fileData.s3Url.status') === 'done') {
      return [
        {
          uid: -1,
          name: uploadValue.fileData.s3Url.name,
          status: 'done',
          url: uploadValue.fileData.s3Url.get_url,
          s3_key: uploadValue.fileData.s3Url.key,
          attachment_id: uploadValue.fileData.s3Url.attachment,
          size: get(uploadValue, 'extraData.file_size'),
          file_type: get(uploadValue, 'extraData.file_type'),
        },
      ];
    }

    if (get(uploadValue, 'file') || !uploadValue) {
      return null;
    }

    return [];
  });
