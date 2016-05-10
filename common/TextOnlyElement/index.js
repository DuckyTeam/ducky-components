import React from 'react';
import {PropTypes} from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const BREAK_TEXT_LENGTH = 415;

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

    if (textLength > BREAK_TEXT_LENGTH && !props.showFullText) {
        return (
            <div
                className={classNames(styles.shadowWrapper, {
                    [props.className]: props.className
                })}
                onClick={props.onClick}
            >
                <Typography
                    className={styles.text}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
                <div className={styles.gradient}></div>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Typography
                className={styles.text}
                type="bodyTextNormal"
            >
                {props.children}
            </Typography>
        </div>
    );
}

TextOnlyElement.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    showFullText: PropTypes.bool
};

export default TextOnlyElement;
