import React from 'react';
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
        {"LUKK"}
      </Button>
    </div>
  );
}

SectionFooterClose.displayName = "Section Footer Close";
SectionFooterClose.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func
};

export default SectionFooterClose;
