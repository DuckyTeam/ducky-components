import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import LabelTitle from '../LabelTitle';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderSubsection(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}>
      <Wrapper
        className={styles.iconTextWrapper}
        onClick={props.onClick}
        size="short"
        >
        <LabelTitle
          icon={props.leftIcon}
          size="regular"
          text={props.title}
          />
      </Wrapper>
      {props.rightIcon
        ? <IconAvaWrapper
          icon={props.rightIcon}
          onClick={props.onRightIconClick}
          size={"standard"}
          />
        : null
      }
    </div>
  );
}

SectionHeaderSubsection.propTypes = {
  className: React.PropTypes.string,
  leftIcon: React.PropTypes.string,
  onClick: React.PropTypes.func,
  onRightIconClick: React.PropTypes.func,
  rightIcon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default SectionHeaderSubsection;
