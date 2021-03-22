import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Tag } from 'components';
import styles from './SegmentTag.module.scss';

function SegmentTag(props) {
  // I am thinking will already has something like this. just swipe from him
  const { segmentType } = props;
  let msg = '';
  let display = '';
  let tagColor;
  switch (segmentType) {
    // hardcoding in display values, should be getting this from options. @Will what u think
    case 'behavioral':
      display = 'Behavioral';
      msg = `Accounts discovered through users 
      researching relevant keywords, or visiting your website.`;
      tagColor = '#109E96';
      break;
    case 'firmographic':
      display = 'Firmographic';
      msg = 'Accounts discovered based on our rich data set of account attributes.';
      tagColor = '#674ea7';
      break;
    case 'named_accounts':
      display = 'Named Accounts';
      msg = 'Accounts from a list uploaded by your organization.';
      tagColor = '#2b78e4';
      break;
    default:
      break;
  }
  return (
    <Tooltip title={msg}>
      <Tag className={styles.tag} color={tagColor}>
        {display}
      </Tag>
    </Tooltip>
  );
}

SegmentTag.propTypes = {
  segmentType: PropTypes.string,
};

export default SegmentTag;
