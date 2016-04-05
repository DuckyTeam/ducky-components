import React from 'react';
import styles from './styles.css';
import classnames from 'classnames';

function Dropdown(props) {
  const className = classnames(styles.wrapper, props.className);
  
  return (
      <div className={className}>
          {props.children}
      </div>
  );
}

Dropdown.propTypes = {
    children: React.PropTypes.any,
    onModalHide: React.PropTypes.func,
    showModal: React.PropTypes.bool
};

export default Dropdown;
