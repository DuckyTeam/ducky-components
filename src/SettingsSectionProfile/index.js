
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import React from 'react';
import Image from '../ImageElement';
// import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
// import SectionFooterOK from '../SectionFooterOK';
// import TextArea from '../TextAreaLarge';
import Wrapper from '../Wrapper';
const PropTypes = React.PropTypes;

function SettingsSectionProfile(props) {
  const CoverImgStyle = {
    backgroundImage: `url(${props.coverImageURL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '180px'
  };

  return (
    <div className={classNames(styles.outerWrapper,
      {[props.className]: props.className})}>
      <div className={styles.coverImage}
        style={CoverImgStyle}
        >
        <ActionButton className={styles.button1}
          icon="icon-photo_camera"
          size="standard"
          />
      </div>
      <Wrapper>
      <ActionButton className={styles.button2}
        icon="icon-star"
        size="standard"
        />
        <Avatar className={styles.avy}
          image={props.avyURL}
          size="display2"
          />


      </Wrapper>

    </div>
    );
}

SettingsSectionProfile.propTypes = {
  avyURL: PropTypes.string,
  className: PropTypes.string,
  coverImageURL: PropTypes.string,
  textAerrorMessage1: PropTypes.node,
  textAerrorMessage2: PropTypes.node,
  textAerrorMessage3: PropTypes.node,
  textAlabel1: PropTypes.node,
  textAlabel2: PropTypes.node,
  textAlabel3: PropTypes.node,
  textAmaxLength1: PropTypes.node,
  textAmaxLength2: PropTypes.node,
  textAmaxLength3: PropTypes.node,
  textAonBlur: PropTypes.func,
  textAonChange: PropTypes.func,
  textAonFocus: PropTypes.func,
  textAplaceholder1: PropTypes.string,
  textAplaceholder2: PropTypes.string,
  textAplaceholder3: PropTypes.string,
  textAsize1: PropTypes.oneOf(['default', 'large', 'huge']),
  textAsize2: PropTypes.oneOf(['default', 'large', 'huge']),
  textAsize3: PropTypes.oneOf(['default', 'large', 'huge']),
  textAvalue1: PropTypes.node

};

export default SettingsSectionProfile;
