import PropTypes from 'prop-types';
import { Modal } from 'antd';

export function WarningModal(props) {
  const { modalType, content, onConfirm } = props;
  const node = Modal[modalType];
  return node({
    ...props,
    content,
    onCancel: () => {},
    onOk: onConfirm,
  });
}

WarningModal.propTypes = {
  modalType: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
};

export default WarningModal;
