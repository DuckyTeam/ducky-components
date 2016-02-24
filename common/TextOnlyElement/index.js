import React from 'react';
import styles from './styles.css';

function TextOnlyElement(props) {
  console.log(props.children.length);
    if (props.children.length > 200) {
        return (
          <div className={styles.shadowWrapper}>
            {props.children}
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
