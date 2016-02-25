import React from 'react';
import styles from './styles.css';

function TextOnlyElement(props) {
    if (props.children.length > 250) {
        return (
          <div className={styles.shadowWrapper}>
            {props.children}
            <div className={styles.gradient}></div>
          </div>
        );
    }

    return (
      <div className={styles.wrapper}>
        {props.children}
      </div>
    );
}

TextOnlyElement.propTypes = {
    children: React.PropTypes.any
};

export default TextOnlyElement;
