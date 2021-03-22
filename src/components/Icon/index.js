import React from 'react';
import PropTypes from 'prop-types';
import { Icon as AntIcon } from 'antd';
import styles from './Icon.module.scss';
import { map } from 'lodash';
import { UrsaMajor,
  Astronaut,
  Comet,
  Galaxy,
  Planet,
  Rocket,
  SolarSystem,
  Soyuz,
  Segment,
  Account,
  B2BNetwork,
  ExternalCampaign,
  ExternalPixel,
  Keyword,
  KeywordHighlight,
  SixsenseCampaign,
  Tag,
  WebsiteActivites,
  NotSetUp,
} from './icons';

const ICON_CLOSE = 'close';
const ICON_PAGE_VIEWS = 'fa fa-eye';
const ICON_PAGE_CLICKS = 'fa fa-mouse-pointer';
const ICON_VIDEO_PLAYS = 'fa fa-file-video-o';
const ICON_FORM_SUBMITS = 'fa fa-wpforms';
const ICON_CTR = 'fa fa-arrow-circle-o-right';
const ICON_MEDIA_IMPRESSIONS = 'fa fa-bullseye';
const ICON_MEDIA_CLICKS = 'fa fa-flickr';
const ICON_CAMPAIGNS = 'fa fa-briefcase';
const ICON_TPM = 'fa fa-file-image-o';
const ICON_CALENDAR = 'fa fa-calendar';
const ICON_CALENDAR_O = 'fa fa-calendar-check-o';
const ICON_VISITORS = 'fa fa-users';
const ICON_TAGS = 'fa fa-tags';
const ICON_ARROW_RIGHT = 'fa fa-arrow-circle-right';
const ICON_SITE_MAP = 'fa fa-sitemap';
const ICON_LOCATIONS = 'fa fa-globe';
const ICON_TOP_REFERRERS = 'fa fa-link';
const ICON_BANNER = 'fa fa-bookmark';
const ICON_ACTIVITIES = 'fa fa-random';
const ICON_LATEST_ACTIVITY = 'fa fa-clock-o';
const ICON_FLIGHT_DATES = 'fa fa-plane';
const ICON_CAMPAIGNS_MANAGE = 'fa fa-file-text-o';
const ICON_MORE = 'fa fa-ellipsis-h';
const ICON_EMPIRE = 'fa fa-empire';
const ICON_ERROR = 'fa fa-times';
const ICON_CLOCK = 'fa fa-clock-o';
const ICON_PLUS = 'fa fa-plus';
const ICON_ANGLE_DOWN = 'fa fa-angle-down';
const ICON_UPLOAD = 'fa fa-cloud-upload';
const ICON_CHECK = 'fa fa-check';
const ICON_CHECK_CIRCLE = 'fa fa-check-circle';
const ICON_ASTERISK = 'fa fa-asterisk';
const ICON_ELLIPSIS_HORIZONTAL = 'fa fa-ellipsis-h';
const ICON_PLAY_CIRCLE_O = 'fa fa-play-circle-o';
const ICON_PAUSE_CIRCLE_O = 'fa fa-pause-circle-o';
const ICON_PAUSE_CIRCLE = 'fa fa-pause-circle';
const ICON_DELETE = 'fa fa-trash-o';
const ICON_DOWNLOAD = 'fa fa-cloud-download';
const ICON_HELP = 'fa fa-question-circle';
const ICON_RIGHT_ARROW = 'arrow-right';
const ICON_EDIT = 'fa fa-pencil';
const ICON_PENCIL_SQUARE = 'fa fa-pencil-square';
const ICON_CARET_DOWN = 'fa fa-caret-down';
const ICON_ARROW_CIRCLE_LEFT = 'fa fa-arrow-circle-o-left';
const ICON_CHECK_CIRCLE_O = 'fa fa-check-circle-o';
const ICON_LOADING_CIRCLE_NOTCH = 'fa fa-circle-o-notch fa-spin';
const ICON_TIME_CIRCLE = 'fa fa-times-circle';
const ICON_BULLHORN = 'fa fa-bullhorn';
const ICON_CERTIFICATE = 'fa fa-certificate';
const ICON_BAN = 'fa fa-ban';
const ICON_GLOBE = 'fa fa-globe';
const ICON_FILTER = 'fa fa-filter';
const ICON_SHARE = 'fa fa-share-alt';
const ICON_DATABASE = 'fa fa-database';
const ICON_YOUTUBE = 'fa fa-youtube';
const ICON_VIMEO = 'fa fa-vimeo';
const ICON_PDF = 'fa fa-file-pdf-o';
const ICON_MINUS = 'fa fa-minus';
const ICON_REFRESH = 'fa fa-refresh';
const ICON_DOWN_ARROW = 'fa fa-arrow-down';
const ICON_UP_ARROW = 'fa fa-arrow-up';
const ICON_SORT = 'fa fa-sort';

// iconType constants
const BULLHORN_ICON = 'BULLHORN_ICON';
const CAMPAIGN_DRAFT_ICON = 'CAMPAIGN_DRAFT_ICON';
const CAMPAIGN_PENDING_REVIEW_ICON = 'CAMPAIGN_PENDING_REVIEW_ICON';
const CAMPAIGN_ACTIVE_ICON = 'CAMPAIGN_ACTIVE_ICON';
const CAMPAIGN_DEACTIVATED_ICON = 'CAMPAIGN_DEACTIVATED_ICON';
const CAMPAIGN_EDITING_ICON = 'CAMPAIGN_EDITING_ICON';
const CAMPAIGN_ENDED_ICON = 'CAMPAIGN_ENDED_ICON';
const PAGE_VIEWS_ICON = 'PAGE_VIEWS';
const PAGE_CLICKS_ICON = 'PAGE_CLICKS';
const VIDEO_PLAYS_ICON = 'VIDEO_PLAYS';
const FORM_SUBMITS_ICON = 'FORM_SUBMITS';
const CTR_ICON = 'CTR';
const MEDIA_IMPRESSIONS_ICON = 'MEDIA_IMPRESSIONS';
const MEDIA_CLICKS_ICON = 'MEDIA_CLICKS';
const WEBSITE_ACTIVITIES_ICON = 'WEBSITE_ACTIVITIES';
const KEYWORDS_ICON = 'KEYWORDS';
const CAMPAIGNS_ICON = 'CAMPAIGNS';
const TPM_ICON = 'TPM';
const ACCOUNTS_ICON = 'ACCOUNTS';
const CALENDAR_ICON = 'CALENDAR_ICON';
const CALENDAR_ICON_O = 'CALENDAR_ICON_O';
const VISITORS_ICON = 'VISITORS';
const TAGS_ICON = 'TAGS';
const ARROW_RIGHT_ICON = 'ARROW_RIGHT';
const SITE_MAP_ICON = 'SITE_MAP';
const LOCATIONS_ICON = 'LOCATIONS';
const TOP_REFERRERS_ICON = 'TOP_REFERRERS';
const TAG_ICON = 'TAG';
const BANNER_ICON = 'BANNER';
const LATEST_ACTIVITY_ICON = 'LATEST_ACTIVITY';
const ACTIVITIES_ICON = 'ACTIVITIES';
const FLIGHT_DATES_ICON = 'FLIGHT_DATES';
const CAMPAIGNS_MANAGE_ICON = 'CAMPAIGNS_MANAGE';
const MORE_ICON = 'MORE';
const EMPIRE_ICON = 'EMPIRE';
const ERROR_ICON = 'ERROR';
const CLOCK_ICON = 'CLOCK';
const PLUS_ICON = 'PLUS';
const ANGLE_DOWN_ICON = 'ANGLE_DOWN';
const UPLOAD_ICON = 'UPLOAD';
const CLOSE_ICON = 'CLOSE';
const CHECK_CIRCLE_ICON = 'CHECK_CIRCLE';
const CHECK_ICON = 'CHECK_ICON';
const REQUIRED_ICON = 'REQUIRED';
const ELLIPSIS_HORIZONTAL_ICON = 'ELLIPSIS_HORIZONTAL';
const PLAY_CIRCLE_ICON = 'PLAY_CIRCLE';
const PAUSE_CIRCLE_ICON = 'PAUSE_CIRCLE';
const DELETE_ICON = 'DELETE_ICON';
const DOWNLOAD_ICON = 'DOWNLOAD_ICON';
const HELP_ICON = 'HELP_ICON';
const RIGHT_ARROW_ICON = 'RIGHT_ARROW_ICON';
const EDIT_ICON = 'EDIT_ICON';
const CARET_DOWN_ICON = 'CARET_DOWN_ICON';
const ARROW_CIRCLE_LEFT = 'ARROW_CIRCLE_LEFT';
const CHECK_CIRCLE_O = 'CHECK_CIRCLE_O';
const LOADING_CIRCLE_NOTCH = 'LOADING_CIRCLE_NOTCH';
const TIMES_CIRCLE_ICON = 'TIMES_CIRCLE_ICON';
const URSA_MAJOR_ICON = 'URSA_MAJOR_ICON';
const SOYUZ_ICON = 'SOYUZ_ICON';
const SOLAR_SYSTEM_ICON = 'SOLARY_SYSTEM_ICON';
const ROCKET_ICON = 'ROCKET_ICON';
const SEGMENT_ICON = 'SEGMENT_ICON';
const PLANET_ICON = 'PLANET_ICON';
const GALAXY_ICON = 'GALAXY_ICON';
const COMET_ICON = 'COMET_ICON';
const ASTRONAUT_ICON = 'ASTRONAUT_ICON';
const GLOBE_ICON = 'GLOBE';
const FILTER_ICON = 'FILTER';
const SHARE_ICON = 'SHARE';
const DATA_ERROR_ICON = 'DATA_ERROR_ICON';
const YOUTUBE_ICON = 'YOUTUBE_ICON';
const VIMEO_ICON = 'VIMEO_ICON';
const PDF_ICON = 'PDF_ICON';
const SIXSENSE_CAMPAIGN_ICON = 'SIXSENSE_CAMPAIGN';
const B2BNETWORK_ICON = 'B2BNETWORK_ICON';
const EXTERNAL_CAMPAIGN_ICON = 'EXTERNAL_CAMPAIGN_ICON';
const KEYWORD_HIGHLIGHT_ICON = 'KEYWORD_ICON_HIGHLIGHT';
const EXTERNAL_PIXEL_ICON = 'EXTERNAL_PIXEL_ICON';
const NOTSETUP_ICON = 'NOTSETUP_ICON';
const MINUS_ICON = 'ICON_MINUS';
const REFRESH_ICON = 'ICON_REFRESH';
const UP_ARROW_ICON = 'ICON_UP_ARROW';
const DOWN_ARROW_ICON = 'ICON_DOWN_ARROW';
const SORT_ICON = 'ICON_SORT';

function Icon(props) {
  const { weight, size, classIcon, color, iconType, inverse, onClick, title } = props;

  let iconTypeClass;
  let colorClass;
  let isExternalIcon = false;
  let multiple = false;
  let svgIcon = false;

  switch (iconType) {
    case NOTSETUP_ICON:
      svgIcon = true;
      iconTypeClass = NotSetUp;
      break;
    case SIXSENSE_CAMPAIGN_ICON:
      svgIcon = true;
      iconTypeClass = SixsenseCampaign;
      break;
    case B2BNETWORK_ICON:
      svgIcon = true;
      iconTypeClass = B2BNetwork;
      break;
    case EXTERNAL_CAMPAIGN_ICON:
      svgIcon = true;
      iconTypeClass = ExternalCampaign;
      break;
    case KEYWORD_HIGHLIGHT_ICON:
      svgIcon = true;
      iconTypeClass = KeywordHighlight;
      break;
    case EXTERNAL_PIXEL_ICON:
      svgIcon = true;
      iconTypeClass = ExternalPixel;
      break;
    case URSA_MAJOR_ICON:
      svgIcon = true;
      iconTypeClass = UrsaMajor;
      break;
    case SOYUZ_ICON:
      svgIcon = true;
      iconTypeClass = Soyuz;
      break;
    case SOLAR_SYSTEM_ICON:
      svgIcon = true;
      iconTypeClass = SolarSystem;
      break;
    case ROCKET_ICON:
      svgIcon = true;
      iconTypeClass = Rocket;
      break;
    case SEGMENT_ICON:
      svgIcon = true;
      iconTypeClass = Segment;
      break;
    case PLANET_ICON:
      svgIcon = true;
      iconTypeClass = Planet;
      break;
    case GALAXY_ICON:
      svgIcon = true;
      iconTypeClass = Galaxy;
      break;
    case COMET_ICON:
      svgIcon = true;
      iconTypeClass = Comet;
      break;
    case ASTRONAUT_ICON:
      svgIcon = true;
      iconTypeClass = Astronaut;
      break;
    case BULLHORN_ICON:
      iconTypeClass = ICON_BULLHORN;
      break;
    case CAMPAIGN_DRAFT_ICON:
      iconTypeClass = ICON_CERTIFICATE;
      colorClass = styles.draftStatus;
      break;
    case CAMPAIGN_PENDING_REVIEW_ICON:
      iconTypeClass = ICON_ARROW_RIGHT;
      colorClass = styles.pendingStatus;
      break;
    case CAMPAIGN_ACTIVE_ICON:
      iconTypeClass = ICON_PLAY_CIRCLE_O;
      colorClass = styles.activeStatus;
      break;
    case CAMPAIGN_DEACTIVATED_ICON:
      iconTypeClass = ICON_PAUSE_CIRCLE;
      colorClass = styles.deactivatedStatus;
      break;
    case CAMPAIGN_EDITING_ICON:
      iconTypeClass = ICON_PENCIL_SQUARE;
      colorClass = styles.deactivatedStatus;
      break;
    case CAMPAIGN_ENDED_ICON:
      iconTypeClass = ICON_BAN;
      colorClass = styles.endedStatus;
      break;
    case TIMES_CIRCLE_ICON:
      iconTypeClass = ICON_TIME_CIRCLE;
      break;
    case CALENDAR_ICON:
      iconTypeClass = ICON_CALENDAR;
      colorClass = styles.darkTeal;
      break;
    case CALENDAR_ICON_O:
      iconTypeClass = ICON_CALENDAR_O;
      break;
    case PAGE_VIEWS_ICON:
      iconTypeClass = ICON_PAGE_VIEWS;
      break;
    case PAGE_CLICKS_ICON:
      iconTypeClass = ICON_PAGE_CLICKS;
      break;
    case VIDEO_PLAYS_ICON:
      iconTypeClass = ICON_VIDEO_PLAYS;
      break;
    case FORM_SUBMITS_ICON:
      iconTypeClass = ICON_FORM_SUBMITS;
      break;
    case CTR_ICON:
      iconTypeClass = ICON_CTR;
      break;
    case MEDIA_IMPRESSIONS_ICON:
      iconTypeClass = ICON_MEDIA_IMPRESSIONS;
      break;
    case MEDIA_CLICKS_ICON:
      iconTypeClass = ICON_MEDIA_CLICKS;
      break;
    case WEBSITE_ACTIVITIES_ICON:
      svgIcon = true;
      iconTypeClass = WebsiteActivites;
      break;
    case KEYWORDS_ICON:
      svgIcon = true;
      iconTypeClass = Keyword;
      break;
    case CAMPAIGNS_ICON:
      iconTypeClass = ICON_CAMPAIGNS;
      break;
    case TPM_ICON:
      iconTypeClass = ICON_TPM;
      break;
    case ACCOUNTS_ICON:
      svgIcon = true;
      iconTypeClass = Account;
      break;
    case VISITORS_ICON:
      iconTypeClass = ICON_VISITORS;
      break;
    case TAGS_ICON:
      iconTypeClass = ICON_TAGS;
      break;
    case ARROW_RIGHT_ICON:
      iconTypeClass = ICON_ARROW_RIGHT;
      break;
    case SITE_MAP_ICON:
      iconTypeClass = ICON_SITE_MAP;
      break;
    case LOCATIONS_ICON:
      iconTypeClass = ICON_LOCATIONS;
      break;
    case TOP_REFERRERS_ICON:
      iconTypeClass = ICON_TOP_REFERRERS;
      break;
    case TAG_ICON:
      svgIcon = true;
      iconTypeClass = Tag;
      break;
    case BANNER_ICON:
      iconTypeClass = ICON_BANNER;
      break;
    case LATEST_ACTIVITY_ICON:
      iconTypeClass = ICON_LATEST_ACTIVITY;
      break;
    case ACTIVITIES_ICON:
      iconTypeClass = ICON_ACTIVITIES;
      break;
    case FLIGHT_DATES_ICON:
      iconTypeClass = ICON_FLIGHT_DATES;
      break;
    case CAMPAIGNS_MANAGE_ICON:
      iconTypeClass = ICON_CAMPAIGNS_MANAGE;
      break;
    case MORE_ICON:
      iconTypeClass = ICON_MORE;
      break;
    case EMPIRE_ICON:
      iconTypeClass = ICON_EMPIRE;
      break;
    case ERROR_ICON:
      iconTypeClass = ICON_ERROR;
      break;
    case DATA_ERROR_ICON:
      multiple = true;
      iconTypeClass = [
        `${ICON_DATABASE} fa-stack-1x ${styles.DataErrorBaseIcon}`,
        `${ICON_ERROR} fa-stack-2x ${styles.DataErrorSubIcon}`,
      ];
      break;
    case CLOCK_ICON:
      iconTypeClass = ICON_CLOCK;
      break;
    case PLUS_ICON:
      iconTypeClass = ICON_PLUS;
      break;
    case ANGLE_DOWN_ICON:
      iconTypeClass = ICON_ANGLE_DOWN;
      break;
    case UPLOAD_ICON:
      iconTypeClass = ICON_UPLOAD;
      break;
    case CLOSE_ICON:
      iconTypeClass = ICON_CLOSE;
      isExternalIcon = true;
      break;
    case CHECK_CIRCLE_ICON:
      iconTypeClass = ICON_CHECK_CIRCLE;
      break;
    case CHECK_ICON:
      iconTypeClass = ICON_CHECK;
      break;
    case REQUIRED_ICON:
      iconTypeClass = ICON_ASTERISK;
      break;
    case ELLIPSIS_HORIZONTAL_ICON:
      iconTypeClass = ICON_ELLIPSIS_HORIZONTAL;
      break;
    case PLAY_CIRCLE_ICON:
      iconTypeClass = ICON_PLAY_CIRCLE_O;
      break;
    case PAUSE_CIRCLE_ICON:
      iconTypeClass = ICON_PAUSE_CIRCLE_O;
      break;
    case DELETE_ICON:
      iconTypeClass = ICON_DELETE;
      break;
    case DOWNLOAD_ICON:
      iconTypeClass = ICON_DOWNLOAD;
      break;
    case HELP_ICON:
      iconTypeClass = ICON_HELP;
      break;
    case RIGHT_ARROW_ICON:
      iconTypeClass = ICON_RIGHT_ARROW;
      isExternalIcon = true;
      break;
    case EDIT_ICON:
      iconTypeClass = ICON_EDIT;
      break;
    case CARET_DOWN_ICON:
      iconTypeClass = ICON_CARET_DOWN;
      break;
    case ARROW_CIRCLE_LEFT:
      iconTypeClass = ICON_ARROW_CIRCLE_LEFT;
      break;
    case CHECK_CIRCLE_O:
      iconTypeClass = ICON_CHECK_CIRCLE_O;
      break;
    case LOADING_CIRCLE_NOTCH:
      iconTypeClass = ICON_LOADING_CIRCLE_NOTCH;
      break;
    case GLOBE_ICON:
      iconTypeClass = ICON_GLOBE;
      break;
    case FILTER_ICON:
      iconTypeClass = ICON_FILTER;
      break;
    case SHARE_ICON:
      iconTypeClass = ICON_SHARE;
      break;
    case YOUTUBE_ICON:
      iconTypeClass = ICON_YOUTUBE;
      break;
    case VIMEO_ICON:
      iconTypeClass = ICON_VIMEO;
      break;
    case PDF_ICON:
      iconTypeClass = ICON_PDF;
      break;
    case MINUS_ICON:
      iconTypeClass = ICON_MINUS;
      break;
    case REFRESH_ICON:
      iconTypeClass = ICON_REFRESH;
      break;
    case UP_ARROW_ICON:
      iconTypeClass = ICON_UP_ARROW;
      break;
    case DOWN_ARROW_ICON:
      iconTypeClass = ICON_DOWN_ARROW;
      break;
    case SORT_ICON:
      iconTypeClass = ICON_SORT;
      break;
    default:
      iconTypeClass = '';
  }

  let weightClass;
  switch (weight) {
    default:
      weightClass = '';
  }

  let sizeClass;
  switch (size) {
    case 'small':
      sizeClass = styles.sizeSmall;
      break;
    case 'medium':
      sizeClass = styles.sizeMedium;
      break;
    case 'medium1':
      sizeClass = styles.sizeMedium1;
      break;
    case 'small4':
      sizeClass = styles.sizeSmall4;
      break;
    case 'med2':
      sizeClass = styles.sizeMed2;
      break;
    case 'large1':
      sizeClass = styles.sizeLarge1;
      break;
    case 'large2':
      sizeClass = styles.sizeLarge2;
      break;
    case 'extraLarge':
      sizeClass = styles.sizeExtraLarge;
      break;
    default:
      sizeClass = '';// styles.defaultSize

  }

  switch (color) {
    case 'orange':
      colorClass = styles.orange;
      break;
    case 'green':
      colorClass = styles.green;
      break;
    case 'black':
      colorClass = styles.black;
      break;
    case 'blue':
      colorClass = styles.blue;
      break;
    case 'red':
      colorClass = styles.red;
      break;
    case 'disabled':
      colorClass = styles.disbaledColor;
      break;
    default:
      colorClass = colorClass || styles.colorDefault;
  }

  let finaliconTypeClass = `${weightClass} ${sizeClass} ${colorClass}`;

  if (svgIcon) {
    const IconComp = iconTypeClass;
    return (<IconComp className={`${sizeClass} ${classIcon}`} color={color} />);
  }

  if (multiple) {
    const icons = map(iconTypeClass, (item) => <i className={`${finaliconTypeClass} ${item}`} />);
    return (
      <span className={'fa-stack'}>
        {icons}
      </span>
    );
  }

  if (!isExternalIcon) {
    finaliconTypeClass = `${iconTypeClass}  ${finaliconTypeClass}`;
  }

  if (classIcon) {
    finaliconTypeClass = `${classIcon} ${finaliconTypeClass}`;
  }

  if (isExternalIcon) {
    return (
      <AntIcon
        type={iconTypeClass}
        className={finaliconTypeClass}
        onClick={onClick}
      />
    );
  }

  let iconDisplay = (<i className={finaliconTypeClass} title={title} alt={title} />);
  if (inverse) {
    finaliconTypeClass = `${classIcon} ${finaliconTypeClass} fa-stack-1x fa-inverse`;
    iconDisplay = (
      <span className="fa-stack">
        <i className="fa fa-circle fa-stack-2x" />
        <i className={finaliconTypeClass} />
      </span>
    );
  }
  return iconDisplay;
}

Icon.BULLHORN_ICON = BULLHORN_ICON;
Icon.CAMPAIGN_DRAFT_ICON = CAMPAIGN_DRAFT_ICON;
Icon.CAMPAIGN_PENDING_REVIEW_ICON = CAMPAIGN_PENDING_REVIEW_ICON;
Icon.CAMPAIGN_ACTIVE_ICON = CAMPAIGN_ACTIVE_ICON;
Icon.CAMPAIGN_DEACTIVATED_ICON = CAMPAIGN_DEACTIVATED_ICON;
Icon.CAMPAIGN_EDITING_ICON = CAMPAIGN_EDITING_ICON;
Icon.CAMPAIGN_ENDED_ICON = CAMPAIGN_ENDED_ICON;
Icon.PAGE_VIEWS_ICON = PAGE_VIEWS_ICON;
Icon.PAGE_CLICKS_ICON = PAGE_CLICKS_ICON;
Icon.VIDEO_PLAYS_ICON = VIDEO_PLAYS_ICON;
Icon.FORM_SUBMITS_ICON = FORM_SUBMITS_ICON;
Icon.CTR_ICON = CTR_ICON;
Icon.MEDIA_IMPRESSIONS_ICON = MEDIA_IMPRESSIONS_ICON;
Icon.MEDIA_CLICKS_ICON = MEDIA_CLICKS_ICON;
Icon.WEBSITE_ACTIVITIES_ICON = WEBSITE_ACTIVITIES_ICON;
Icon.KEYWORDS_ICON = KEYWORDS_ICON;
Icon.CAMPAIGNS_ICON = CAMPAIGNS_ICON;
Icon.TPM_ICON = TPM_ICON;
Icon.ACCOUNTS_ICON = ACCOUNTS_ICON;
Icon.CALENDAR_ICON = CALENDAR_ICON;
Icon.CALENDAR_ICON_O = CALENDAR_ICON_O;
Icon.VISITORS_ICON = VISITORS_ICON;
Icon.TAGS_ICON = TAGS_ICON;
Icon.ARROW_RIGHT_ICON = ARROW_RIGHT_ICON;
Icon.SITE_MAP_ICON = SITE_MAP_ICON;
Icon.LOCATIONS_ICON = LOCATIONS_ICON;
Icon.TOP_REFERRERS_ICON = TOP_REFERRERS_ICON;
Icon.TAG_ICON = TAG_ICON;
Icon.BANNER_ICON = BANNER_ICON;
Icon.LATEST_ACTIVITY_ICON = LATEST_ACTIVITY_ICON;
Icon.ACTIVITIES_ICON = ACTIVITIES_ICON;
Icon.FLIGHT_DATES_ICON = FLIGHT_DATES_ICON;
Icon.CAMPAIGNS_MANAGE_ICON = CAMPAIGNS_MANAGE_ICON;
Icon.MORE_ICON = MORE_ICON;
Icon.EMPIRE_ICON = EMPIRE_ICON;
Icon.ERROR_ICON = ERROR_ICON;
Icon.CLOCK_ICON = CLOCK_ICON;
Icon.PLUS_ICON = PLUS_ICON;
Icon.ANGLE_DOWN_ICON = ANGLE_DOWN_ICON;
Icon.UPLOAD_ICON = UPLOAD_ICON;
Icon.CLOSE_ICON = CLOSE_ICON;
Icon.CHECK_CIRCLE_ICON = CHECK_CIRCLE_ICON;
Icon.CHECK_ICON = CHECK_ICON;
Icon.REQUIRED_ICON = REQUIRED_ICON;
Icon.ELLIPSIS_HORIZONTAL_ICON = ELLIPSIS_HORIZONTAL_ICON;
Icon.PLAY_CIRCLE_ICON = PLAY_CIRCLE_ICON;
Icon.PAUSE_CIRCLE_ICON = PAUSE_CIRCLE_ICON;
Icon.DELETE_ICON = DELETE_ICON;
Icon.DOWNLOAD_ICON = DOWNLOAD_ICON;
Icon.HELP_ICON = HELP_ICON;
Icon.RIGHT_ARROW_ICON = RIGHT_ARROW_ICON;
Icon.EDIT_ICON = EDIT_ICON;
Icon.CARET_DOWN_ICON = CARET_DOWN_ICON;
Icon.ARROW_CIRCLE_LEFT = ARROW_CIRCLE_LEFT;
Icon.CHECK_CIRCLE_O = CHECK_CIRCLE_O;
Icon.LOADING_CIRCLE_NOTCH = LOADING_CIRCLE_NOTCH;
Icon.TIMES_CIRCLE_ICON = TIMES_CIRCLE_ICON;
Icon.URSA_MAJOR_ICON = URSA_MAJOR_ICON;
Icon.SOYUZ_ICON = SOYUZ_ICON;
Icon.SOLAR_SYSTEM_ICON = SOLAR_SYSTEM_ICON;
Icon.ROCKET_ICON = ROCKET_ICON;
Icon.SEGMENT_ICON = SEGMENT_ICON;
Icon.PLANET_ICON = PLANET_ICON;
Icon.GALAXY_ICON = GALAXY_ICON;
Icon.COMET_ICON = COMET_ICON;
Icon.ASTRONAUT_ICON = ASTRONAUT_ICON;
Icon.GLOBE_ICON = GLOBE_ICON;
Icon.FILTER_ICON = FILTER_ICON;
Icon.SHARE_ICON = SHARE_ICON;
Icon.DATA_ERROR_ICON = DATA_ERROR_ICON;
Icon.YOUTUBE_ICON = YOUTUBE_ICON;
Icon.VIMEO_ICON = VIMEO_ICON;
Icon.PDF_ICON = PDF_ICON;
Icon.SIXSENSE_CAMPAIGN_ICON = SIXSENSE_CAMPAIGN_ICON;
Icon.B2BNETWORK_ICON = B2BNETWORK_ICON;
Icon.EXTERNAL_CAMPAIGN_ICON = EXTERNAL_CAMPAIGN_ICON;
Icon.KEYWORD_HIGHLIGHT_ICON = KEYWORD_HIGHLIGHT_ICON;
Icon.EXTERNAL_PIXEL_ICON = EXTERNAL_PIXEL_ICON;
Icon.NOTSETUP_ICON = NOTSETUP_ICON;
Icon.MINUS_ICON = MINUS_ICON;
Icon.REFRESH_ICON = REFRESH_ICON;
Icon.UP_ARROW_ICON = UP_ARROW_ICON;
Icon.DOWN_ARROW_ICON = DOWN_ARROW_ICON;
Icon.SORT_ICON = SORT_ICON;

Icon.propTypes = {
  weight: PropTypes.string,
  size: PropTypes.string,
  classIcon: PropTypes.string,
  iconType: PropTypes.string,
  color: PropTypes.string,
  inverse: PropTypes.bool,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
