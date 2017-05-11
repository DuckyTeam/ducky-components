import ActionButton from '../ActionButton';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import Spacer from '../Spacer';
import styles from './styles.css';
import Typography from '../Typography';


function ButtonLoadMore(props) {
  return (
    <div
      className={classNames(styles.container, {
        [props.className]: props.className
      })}
      >
      {props.endOfContent
        ? <div className={styles.innerWrapper}>
          <Typography
            className={styles.textOne}
            type="bodyTextNormal"
            >
            {props.endOfContentText}
          </Typography>
          <Spacer size="double" />
          <ActionButton
            className={styles.upBtn}
            disabled={Boolean(props.disabled)}
            icon="icon-keyboard_arrow_up"
            onClick={props.onClick}
            size="standard"
            />
          <Spacer size="standard" />
          <Typography
            className={styles.textTwo}
            type="bodyTextNormal"
            >
            {props.backToTopText}
          </Typography>
        </div>
        : <div
          className={styles.wrapper}
          onClick={props.onClick}
          >
          <Typography
            className={styles.loadmoreBtnText}
            type="bodyTextNormal"
            >
            {props.showMoreText}
          </Typography>
        </div>
      }
    </div>
  );
}

ButtonLoadMore.propTypes = {
  backToTopText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  endOfContent: PropTypes.bool,
  endOfContentText: PropTypes.string,
  onClick: PropTypes.func,
  showMoreText: PropTypes.string
};

export default ButtonLoadMore;
