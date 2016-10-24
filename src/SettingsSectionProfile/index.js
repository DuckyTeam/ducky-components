
import ActionButton from '../ActionButton';
import Avatar from '../Avatar';
import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import SectionFooterOK from '../SectionFooterOK';
import TextArea from '../TextAreaLarge';
import Wrapper from '../Wrapper';
// const PropTypes = React.PropTypes;

function SettingsSectionProfile(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <img styles={styles.coverImage} />
      <ActionButton styles={styles.coverImageClose} />
      <Wrapper>
        <Avatar />
      </Wrapper>
      <Wrapper>
        <TextArea textAerrorMessage={props.textAerrorMessage1}
          textAlabel1={props.textAlabel1}
          textAmaxLength={props.textAmaxLength1}
          textAplaceholder1={props.textAplaceholder1}
          textAsize={props.textAsize1}
          />
      </Wrapper>
      <Wrapper>
        <TextArea />
      </Wrapper>
      <Wrapper>
        <TextArea />
      </Wrapper>
      <SectionFooterOK />

    </div>
    );
}

SettingsSectionProfile.propTypes = {
  className: PropTypes.string,
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
  textAsize1: PropTypes.oneOf(['default', 'large', 'huge']),
  textAvalue1: PropTypes.node

};

export default SettingsSectionProfile;
