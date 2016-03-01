import React from 'react';
import styles from './styles.css';
import Typography from '../Typography';

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

    if (textLength > 415 && !props.showFullText) {
        return (
          <div className={styles.shadowWrapper} onClick={props.onClick}>
            <Typography type="bodyTextNormal" className={styles.text}>{props.children}</Typography>
            <div className={styles.gradient}></div>
          </div>
        );
    }

    return (
      <div className={styles.wrapper} onClick={props.onClick}>
        <Typography type="bodyTextNormal" className={styles.text}>{props.children}</Typography>
      </div>
    );
}

TextOnlyElement.propTypes = {
    showFullText: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    children: React.PropTypes.any
};

export default TextOnlyElement;
