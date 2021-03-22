import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Thumbnail.module.scss';
import { Modal } from 'components';
import { Row } from 'react-flexbox-grid/lib';

class Thumbnail extends Component {
  state = {
    modalVisible: false,
  };
  toggleModal = () => {
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  };
  render() {
    const { src, name, className, size, onPreview } = this.props;
    let imageClass = styles.base;

    let sizeClass;
    switch (size) {
      default:
        sizeClass = styles.defaultSize;
    }

    let modalWidth = '520';
    if (size) {
      const pictureWidth = parseInt(/(\w+)x\w+$/.exec(size)[1], 10);
      if (pictureWidth) {
        modalWidth = pictureWidth + 40; // For some padding
      }
    }

    imageClass += ` ${sizeClass}`;
    imageClass += className ? ` ${className}` : '';
    imageClass += onPreview ? ` ${styles.preview}` : '';

    return (
      <div>
        <Modal
          width={modalWidth}
          className={styles.modal}
          visible={this.state.modalVisible}
          footer={null}
          onCancel={this.toggleModal}
        >
          <Row center={'xs'}>
            <img src={src} alt={''} />
          </Row>
        </Modal>
        <img onClick={this.toggleModal} className={imageClass} src={src} alt={name} />
      </div>
    );
  }
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onPreview: PropTypes.bool,
};

export default Thumbnail;
