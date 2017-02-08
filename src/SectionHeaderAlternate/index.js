import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderAlternate(props) {
  return (
    <div className={styles.outerWrapper}>
      <Wrapper
        className={classNames(styles.wrapper, {
          [props.className]: props.className
        })}
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
  className: React.PropTypes.string,
  onClickLeftIcon: React.PropTypes.func,
  onClickRightIcon: React.PropTypes.func,
  leftIcon: React.PropTypes.string,
  rightIcon: React.PropTypes.string,
  title: React.PropTypes.string
};

export default SectionHeaderAlternate;
