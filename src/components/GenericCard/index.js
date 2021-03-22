import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid/lib';
import { CardTitleText, HeaderText, Icon, Content, Card } from 'components';
import styles from './GenericCard.module.scss';
import { htmlStrings } from 'utils/constants';

function GenericCard(props) {
  const {
    id,
    title,
    titleComponent,
    loading,
    iconType,
    onClick,
    errorMessage,
    className,
    bodyClassName,
    zeroDataMessage,
    noData,
    noDataMessage,
    children,
    subtitle,
    rightExtra,
    errorStatus,
    error,
    zeroData,
    noTitleBorder = false,
  } = props;
  let displayIcon;
  if (iconType) {
    displayIcon = (
      <div className={styles.icon}>
        <CardTitleText>
          <Icon iconType={iconType} size={'small'} />
        </CardTitleText>
      </div>
    );
  }

  let displayTitle;

  if (titleComponent) {
    displayTitle = titleComponent;
  } else if (title) {
    let displaySubTitle;
    if (subtitle) {
      let subtitleComp = subtitle;
      if (typeof subtitle === 'string') {
        subtitleComp = (
          <HeaderText size={3}>
            {subtitle}
          </HeaderText>
        );
      }
      displaySubTitle = (
        <Row>
          <Col>
            {subtitleComp}
          </Col>
        </Row>
      );
    }

    let titleStyle = styles.title;
    if (noTitleBorder) {
      titleStyle += ` ${styles.noBorder}`;
    }

    displayTitle = (
      <div className={titleStyle}>
        <div className={styles.titleText}>
          <Row start="xs" middle="xs">
            <Col>
              {displayIcon}
            </Col>
            <Col>
              <CardTitleText>
                {title}
              </CardTitleText>
            </Col>
          </Row>
          {displaySubTitle}
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.genericCard} ${className}`} id={id}>
      <Card loading={loading} onClick={onClick} bodyStyle={{ padding: 0 }}>
        {displayTitle}
        <div className={styles.titleExtra}>
          {rightExtra}
        </div>
        <Content
          error={error}
          errorMessage={errorMessage}
          errorStatus={errorStatus}
          noData={noData}
          noDataMessage={noDataMessage}
          zeroData={zeroData}
          zeroDataMessage={zeroDataMessage}
          className={`${styles.body} ${bodyClassName}`}
        >
          {children}
        </Content>
      </Card>
    </div>
  );
}

GenericCard.propTypes = {
  id: PropTypes.string,
  errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  className: PropTypes.string,
  bodyClassName: PropTypes.string,
  errorStatus: PropTypes.string,
  error: PropTypes.bool,
  zeroData: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  titleComponent: PropTypes.element,
  loading: PropTypes.bool,
  iconType: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightExtra: PropTypes.element,
  zeroDataMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  noTitleBorder: PropTypes.bool,
  noData: PropTypes.bool,
  noDataMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

GenericCard.defaultProps = {
  zeroDataMessage: htmlStrings.CARD_ZERO_DATA_GENERIC,
  errorMessage: htmlStrings.CARD_ERROR,
  noDataMessage: htmlStrings.CARD_NO_DATA,
};

export default GenericCard;
