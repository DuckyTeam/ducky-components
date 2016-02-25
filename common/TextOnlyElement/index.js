import React from 'react';
import styles from './styles.css';

function TextOnlyElement(props) {
    let textLength = props.children.length;

    if (typeof props.children !== 'string') {
        textLength = props.children.map((child) => {
            if (typeof child !== 'string') {
                return child.props.children.length;
            }

            return child.length;
        }).reduce((total, value) => {
            return total + value;
        }, 0);
    }

    if (textLength > 250) {
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
