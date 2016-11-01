import ActionButton from '../ActionButton';
import classNames from 'classnames';
import React from 'react';
import Spacer from '../Spacer';
import styles from './styles.css';
import Typography from '../Typography';
const PropTypes = React.PropTypes;

function ButtonLoadMore(props) {
  return (
    <div
      clasName={classNames(styles.container, {
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
  endOfContent: PropTypes.bool,
  endOfContentText: PropTypes.string,
  onClick: PropTypes.func,
  showMoreText: PropTypes.string
};

export default ButtonLoadMore;
