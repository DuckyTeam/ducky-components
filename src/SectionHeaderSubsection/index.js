import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import PropTypes from 'prop-types';
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
  className: PropTypes.string,
  leftIcon: PropTypes.string,
  onClick: PropTypes.func,
  rightIcon: PropTypes.string,
  title: PropTypes.string
};

export default SectionHeaderSubsection;
