import React from 'react';
import styles from './Text.module.scss';
import PropTypes from 'prop-types';
import { FormComponent } from 'HOCS';

function Text(props) {
  const { weight, size, children, color, classText, title, id } = props;

  let classWeight;
  switch (weight) {
    case 'light1':
      classWeight = `${styles.textWeightLight1}`;
      break;
    case 'light2':
      classWeight = `${styles.textWeightLight2}`;
      break;
    case 'med':
      classWeight = `${styles.textWeightMed}`;
      break;
    case 'med1':
      classWeight = `${styles.textWeightMed1}`;
      break;
    case 'med2':
      classWeight = `${styles.textWeightMed2}`;
      break;
    default:
      classWeight = `${styles.textWeightNormal}`;
  }

  let classSize;
  switch (size) {
    case 'small3':
      classSize = `${styles.textSizeSmall3}`;
      break;
    case 'small2':
      classSize = `${styles.textSizeSmall2}`;
      break;
    case 'small1':
      classSize = `${styles.textSizeSmall1}`;
      break;
    case 'med':
      classSize = `${styles.textSizeMed}`;
      break;
    case 'med1':
      classSize = `${styles.textSizeMed1}`;
      break;
    case 'med2':
      classSize = `${styles.textSizeMed2}`;
      break;
    case 'large1':
      classSize = `${styles.textSizeLarge1}`;
      break;
    case 'xlarge':
      classSize = `${styles.textSizeXLarge}`;
      break;
    case 'large2':
      classSize = `${styles.textSizeLarge2}`;
      break;
    case 'large3':
      classSize = `${styles.textSizeLarge3}`;
      break;
    case 'large4':
      classSize = `${styles.textSizeLarge4}`;
      break;
    case 'normal':
      classSize = `${styles.textSizeNormal}`;
      break;
    case 'accountCardSize':
      classSize = `${styles.textSizeAccountCard}`;
      break;
    default:
      classSize = `${styles.textSizeNormal}`;
  }

  let classColor;
  switch (color) {
    case 'headbandLabelColor':
      classColor = `${styles.textColorHeadbandLabel}`;
      break;
    case 'white':
      classColor = `${styles.textColorWhite}`;
      break;
    case 'lighter':
      classColor = `${styles.textColorLighter}`;
      break;
    case 'normal':
      classColor = `${styles.textColorNormal}`;
      break;
    case 'dark':
      classColor = `${styles.textColorDark}`;
      break;
    case 'grey3':
      classColor = `${styles.textColorGrey3}`;
      break;
    case 'grey5':
      classColor = `${styles.textColorGrey5}`;
      break;
    case 'grey6':
      classColor = `${styles.textColorGrey6}`;
      break;
    case 'grey7':
      classColor = `${styles.textColorGrey7}`;
      break;
    case 'grey11':
      classColor = `${styles.textColorGrey11}`;
      break;
    case 'lightGrey':
      classColor = `${styles.textColorLightGrey}`;
      break;
    case 'blue':
      classColor = `${styles.textColorBlue}`;
      break;
    case 'linkBlue':
      classColor = `${styles.textColorLinkBlue}`;
      break;
    case 'purple':
      classColor = `${styles.textColorPurple}`;
      break;
    case 'optional':
      classColor = `${styles.textColorOptional}`;
      break;
    case 'black':
      classColor = `${styles.textColorBlack}`;
      break;
    case 'labelColor':
      classColor = `${styles.textColorLabel}`;
      break;
    default:
      classColor = '';
  }

  let className = `${styles.textBase} ${classColor} ${classSize} ${classWeight}`;
  if (classText) {
    className = `${className} ${classText}`;
  }

  return (
    <span className={className} title={title} id={id}>
      {children}
    </span>
  );
}

Text.form = FormComponent(Text);

Text.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  weight: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  classText: PropTypes.string,
};

export default Text;
