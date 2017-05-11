import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './styles.css';
const BREAK_TEXT_LENGTH = 415;

function TextImageElement(props) {
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

    if (textLength > BREAK_TEXT_LENGTH && !props.showFullText) {
        return (
            <div
                className={styles.shadowWrapper}
                onClick={props.onClick}
            >
                <Typography type="bodyTextNormal">{props.children}</Typography>
                <div className={styles.gradient}></div>
            </div>
        );
    }

    return (
        <div
            className={styles.wrapper}
            onClick={props.onClick}
        >
            <Typography type="bodyTextNormal">
                {props.children}
            </Typography>
        </div>
    );
}

TextImageElement.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    showFullText: PropTypes.bool
};

export default TextImageElement;
