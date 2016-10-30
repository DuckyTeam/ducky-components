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
          Du har scrollet deg gjennom alt innholdet. Bra jobba!
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
          Tilbake til toppen
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
          Vis mer
        </Typography>
      </div>
    }
    </div>
  );
}

ButtonLoadMore.propTypes = {
  className: PropTypes.string,
  endOfContent: PropTypes.bool,
  onClick: PropTypes.func
};

export default ButtonLoadMore;
