import React from 'react';
import PropTypes from 'prop-types';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

function SectionFooterClose(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className}
    )}>
      <Button
        className={styles.button}
        onClick={props.onClick}
        >
        {props.closeButtonText}
      </Button>
    </div>
  );
}

SectionFooterClose.displayName = "Section Footer Close";
SectionFooterClose.propTypes = {
  className: PropTypes.string,
  closeButtonText: PropTypes.string,
  onClick: PropTypes.func
};

export default SectionFooterClose;
