import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderAlternate(props) {
  return (
    <div
      className={classNames(styles.outerWrapper, {
        [props.className]: props.className
      })}
      >
      <Wrapper
        className={styles.wrapper}
        size={"short"}
        >
        <Typography
          className={styles.text}
          type={"bodyTextTitle"}
          >
          {props.title}
        </Typography>
      </Wrapper>
      <div className={styles.iconWrapper}>
        <div>
        {props.rightIcon
        ? <IconAvaWrapper
          className={styles.iconStyles}
          icon={props.rightIcon}
          onClick={props.onClickRightIcon}
          size={"standard"}
          />
        : null}
        {props.leftIcon
        ? <IconAvaWrapper
          className={styles.iconStyles}
          icon={props.leftIcon}
          onClick={props.onClickLeftIcon}
          size={"standard"}
          />
        : null}
        </div>
      </div>
    </div>
    );
}

SectionHeaderAlternate.propTypes = {
  className: PropTypes.string,
  onClickLeftIcon: PropTypes.func,
  onClickRightIcon: PropTypes.func,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  title: PropTypes.string
};

export default SectionHeaderAlternate;
