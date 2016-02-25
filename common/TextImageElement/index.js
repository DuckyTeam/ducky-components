import React from 'react';
import styles from './styles.css';

function TextImageElement(props) {
    return (
      <div className={styles.wrapper}>
        {props.children}
      </div>
    );
}

TextImageElement.propTypes = {
    children: React.PropTypes.any
};

export default TextImageElement;
