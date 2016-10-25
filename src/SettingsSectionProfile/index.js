
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import React from 'react';
import Image from '../ImageElement';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
//import SectionFooterOK from '../SectionFooterOK';
//import TextArea from '../TextAreaLarge';
import Wrapper from '../Wrapper';
// const PropTypes = React.PropTypes;

function SettingsSectionProfile(props) {
  return (
    <div className={classNames(styles.Wrapper, {[props.className]: props.className})}>
      <div>
        <Image background-size="cover"
          height="150"
          image={props.coverImageURL}
          styles={styles.coverImage}
          width="300"
          >
          <ActionButton className={styles.button1} />
        </Image>
      </div>
      <Wrapper background-color="blue" >
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
