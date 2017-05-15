import React from 'react';
import PropTypes from 'prop-types';
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
  cancelText: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default SectionFooterCancelLeft;
