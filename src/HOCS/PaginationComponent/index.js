import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationComponent.module.scss';
import { Row } from 'react-flexbox-grid/lib';
import { Button } from 'antd';

function PaginationComponent(ContentComponent) {
  const Pagination = (props) => {
    const renderButton = () => {
      const {
        loadMore,
        loadingMore,
        offset,
        count,
        loadBoxText,
        loadMoreError,
        loadBoxClass,
        pageSize = 0,
      } = props;

      let classType = styles.loadBox;
      if (loadBoxClass) {
        classType = `${classType} ${loadBoxClass}`;
      }
      if (loadMoreError) {
        classType = `${classType} ${styles.loadBoxError}`;
      }

      if (offset + pageSize < count) {
        return (
          <div>
            <Row center="xs">
              <Button
                id="button_loadMore"
                className={classType}
                onClick={() => loadMore(pageSize)}
                loading={loadingMore}
              >
                {loadBoxText}
              </Button>
            </Row>
          </div>
        );
      }
      return null;
    };

    return (
      <div>
        <ContentComponent {...props} />
        {renderButton()}
      </div>
    );
  };

  Pagination.propTypes = {
    loadMore: PropTypes.func,
    loadingMore: PropTypes.bool,
    count: PropTypes.number,
    offset: PropTypes.number,
    loadMoreError: PropTypes.bool,
    loadBoxText: PropTypes.string,
    loadBoxClass: PropTypes.string,
    pageSize: PropTypes.number,
  };

  Pagination.defaultProps = {
    loadMoreError: false,
    loadBoxText: 'Load More...',
  };

  return Pagination;
}

export default PaginationComponent;
