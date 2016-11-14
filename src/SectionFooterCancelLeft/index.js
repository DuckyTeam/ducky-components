import React from 'react';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

function SectionFooterCancelLeft(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className}
    )}>
      <Button
        className={styles.button}
        onClick={props.onClick}
        >
        {props.cancelText}
      </Button>
    </div>
  );
}

SectionFooterCancelLeft.displayName = "Section Footer Close Left";
SectionFooterCancelLeft.propTypes = {
  cancelText: React.PropTypes.string,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default SectionFooterCancelLeft;
