import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import LabelTitle from '../LabelTitle';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderSubsection(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}
    onClick={props.onClick}>
      <Wrapper
        className={styles.iconTextWrapper}
        size="short"
        >
        {props.leftIcon
        ? <LabelTitle
          icon={props.leftIcon}
          size="regular"
          text={props.title}
          />
        : <Typography
          type="bodyTextNormal">
          {props.title}
        </Typography>}

      </Wrapper>
      {props.rightIcon
        ? <IconAvaWrapper
          icon={props.rightIcon}
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
  rightIcon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default SectionHeaderSubsection;
