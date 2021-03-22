import React from 'react';
import PropTypes from 'prop-types';
import { Upload as AntdUpload } from 'antd';
import { connect } from 'react-redux';
import { FormComponent } from 'HOCS';
import { actions } from './modules';
import { omit, isEqual } from 'lodash';
import styles from './Upload.module.scss';
import { getFileListSelectorFactory, isFileLoading } from './selectors';
import { Icon, Text } from 'components';

const { UPLOAD_ICON } = Icon;

const voidFunc = () => {};

class UploadComponent extends React.Component {
  componentDidMount() {
    const { setDefaultCreative, defaultFile, uploadKey } = this.props;
    if (defaultFile) {
      setDefaultCreative(uploadKey, defaultFile);
    }
  }

  componentWillReceiveProps(nextProps) {
    // Doing a deep comparison... sorry Will!
    if (this.props.onChange && !isEqual(this.props.fileList, nextProps.fileList)) {
      this.props.onChange(nextProps.fileList);
    }
  }

  componentWillUnmount() {
    const { destroyOnUnmount, uploadKey, resetUpload } = this.props;
    if (destroyOnUnmount) {
      resetUpload(uploadKey);
    }
  }

  render() {
    // uploadKey is the name of the key we will attach all our stuff to in the store
    const {
      id,
      uploadCreative,
      uploadKey,
      dispatch,
      beforeUpload,
      className,
      defaultFileList,
      loading,
      maxFiles,
      uploadText,
      disabledText,
      listType,
      attachmentType,
      fileList,
      removeFile,
      onFileRemove,
      uploadClass,
    } = this.props;

    let disabled = false;
    const iconSize = 'med2';
    let iconColor = 'blue';
    let disabledClass = '';

    let message = (
      <div>
        <p>
          <Text size={'med1'} weight={'med2'}>
            Click or drag file to this area to upload
          </Text>
        </p>
        <p>
          <Text color={'grey6'}>
            {uploadText}
          </Text>
        </p>
      </div>
    );

    if (defaultFileList.length > (maxFiles || Infinity) - 1) {
      // This is because antd is dumb
      disabled = true;
    }

    if (fileList && fileList.length > (maxFiles || Infinity) - 1) {
      disabled = true;
    }

    if (defaultFileList.fileList && defaultFileList.fileList.length > (maxFiles || Infinity) - 1) {
      disabled = true;
    }

    if (loading) {
      disabled = true;
    }

    if (disabled) {
      disabledClass = styles.disabled;
      iconColor = 'disabled';
      message = (
        <div>
          <p>
            <Text color={'grey6'}>
              {disabledText}
            </Text>
          </p>
        </div>
      );
    }

    let childProps = this.props;
    if (fileList === null) {
      childProps = omit(childProps, 'fileList');
    }

    // Will need to check why bind to dispatch
    // eslint-disable-line
    const beforeUploadDispatch = beforeUpload.bind(null, dispatch);

    return (
      <div id={id} className={`${styles.uploadSize} ${disabledClass} ${className}`}>
        <AntdUpload.Dragger
          disabled={disabled}
          showUpLoadList
          listType={listType}
          multiple={false}
          onRemove={(file) => {
            removeFile(uploadKey);
            (onFileRemove || voidFunc)(uploadKey, file);
          }}
          {...childProps}
          beforeUpload={beforeUpload ? beforeUploadDispatch : null}
          customRequest={(obj) => {
            uploadCreative(obj, uploadKey, attachmentType);
          }}
        >
          <div className={`${uploadClass} ${styles.uploadMessage}`}>
            <p>
              <Icon iconType={UPLOAD_ICON} size={iconSize} color={iconColor} />
            </p>
            {message}
          </div>
        </AntdUpload.Dragger>
      </div>
    );
  }
}

UploadComponent.defaultProps = {
  defaultFileList: [],
};

UploadComponent.propTypes = {
  id: PropTypes.string,
  uploadKey: PropTypes.string,
  resetUpload: PropTypes.func,
  destroyOnUnmount: PropTypes.bool,
  setDefaultCreative: PropTypes.func,
  defaultFile: PropTypes.object,
  fileList: PropTypes.object,
  onChange: PropTypes.func,
  uploadCreative: PropTypes.func,
  dispatch: PropTypes.func,
  className: PropTypes.string,
  defaultFileList: PropTypes.object,
  loading: PropTypes.bool,
  beforeUpload: PropTypes.func,
  uploadClass: PropTypes.string,
  uploadText: PropTypes.string,
  onFileRemove: PropTypes.func,
  removeFile: PropTypes.func,
  maxFiles: PropTypes.number,
  listType: PropTypes.string,
  disabledText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  attachmentType: PropTypes.string,
};

const { uploadCreative, removeFile, resetUpload, setDefaultCreative } = actions;

const mapDispatchToProps = (dispatch) => ({
  setDefaultCreative: (uploadKey, defaultFile) =>
    dispatch(setDefaultCreative(uploadKey, defaultFile)),
  uploadCreative: (obj, uploadKey, attachmentType) =>
    dispatch(uploadCreative(obj, uploadKey, attachmentType)),
  removeFile: (uploadKey) => dispatch(removeFile(uploadKey)),
  resetUpload: (uploadKey) => dispatch(resetUpload(uploadKey)),
  dispatch,
});

const Upload = (uploadKey, attachmentType) => {
  const UploadWrapper = (props) =>
    <UploadComponent {...props} uploadKey={uploadKey} attachmentType={attachmentType} />;

  const mapStateToProps = (state) => ({
    fileList: getFileListSelectorFactory(uploadKey)(state),
    loading: isFileLoading(uploadKey)(state),
  });

  return connect(mapStateToProps, mapDispatchToProps)(UploadWrapper);
};

const FormUpload = (uploadKey, attachmentType) => {
  const UploadWrapper = (props) =>
    <UploadComponent {...props} uploadKey={uploadKey} attachmentType={attachmentType} />;

  const mapInputToProps = (input) => ({
    onChange: (e) => {
      input.onChange(e);
      input.onBlur(e);
    },
    defaultFile: input.value,
  });

  const mapStateToProps = (state) => ({
    fileList: getFileListSelectorFactory(uploadKey)(state),
    loading: isFileLoading(uploadKey)(state),
  });

  const mapFormStateToProps = (state) => ({
    loading: isFileLoading(uploadKey)(state),
  });

  const ConnectedUpload = connect(mapStateToProps, mapDispatchToProps)(UploadWrapper);
  const ConnectFormComponent = connect(mapFormStateToProps)(
    FormComponent(ConnectedUpload, mapInputToProps)
  );
  return ConnectFormComponent;
};

Upload.form = FormUpload;

export default Upload;
