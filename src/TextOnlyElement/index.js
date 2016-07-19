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
                    [styles[`${props.category}Wrapper`]]: props.category,
                    [props.className]: props.className
                })}
                onClick={props.onClick}
            >
                <Typography
                    className={classNames(styles.text, {
                        [styles.noCategory]: !props.category
                    })}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
                <div
                    className={classNames(styles.gradient, {
                        [styles[`${props.category}Gradient`]]: props.category
                    })}
                >
                </div>
            </div>
        );
    }

    return (
        <div
            className={classNames(styles.wrapper, {
                [styles[`${props.category}Wrapper`]]: props.category,
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Typography
                className={classNames(styles.text, {
                    [styles.noCategory]: !props.category
                })}
                type="bodyTextNormal"
            >
                {props.children}
            </Typography>
        </div>
    );
}

TextOnlyElement.propTypes = {
    category: PropTypes.oneOf(['food', 'consumption', 'energy', 'transport', 'social']),
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
    showFullText: PropTypes.bool
};

export default TextOnlyElement;
