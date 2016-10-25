import React from 'react';
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import Spacer from '../Spacer';
import Icon from '../IconAvaWrapper';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import styles from './styles.css';

const PropTypes = React.PropTypes;

function SettingsSectionOne(props) {
  return (
    <div className={styles.outerContainer}>
      <div
        className={styles.coverImage}
        onClick={props.onCoverImageChange}
        style={{backgroundImage: `url(${props.backgroundImgUrl})`}}
        >
        <ActionButton
          className={styles.actionButton}
          icon={"icon-photo_camera"}
          onClick={props.onCoverImageChange}
          size={'main'}
          />
        <Avatar
          className={styles.duckyAvatar}
          image={props.profileImgUrl}
          onClick={props.onProfileImageChange}
          size={'display2'}
          />
      </div>
      <div className={styles.editIconWrapper}>
        <Icon
          className={styles.editIcon}
          icon={"icon-mode_edit"}
          onClick={props.onEditModeClick}
          />
      </div>
      <Wrapper>
        <Typography
          className={styles.nameWrapper}
          type={'header1'}
          >{props.name}
        </Typography>
      </Wrapper>
      <Wrapper>
        <Typography
          className={styles.descriptionWrapper}
          type={'bodyTextNormal'}
          >{props.description}
        </Typography>
      </Wrapper>
      <Spacer size={'double'} />
    </div>
    );
}

SettingsSectionOne.propTypes = {
  backgroundImgUrl: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  onCoverImageChange: PropTypes.func,
  onEditModeClick: PropTypes.func,
  onProfileImageChange: PropTypes.func,
  profileImgUrl: PropTypes.string
};

export default SettingsSectionOne;
