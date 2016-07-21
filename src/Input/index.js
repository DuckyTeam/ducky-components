import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import WrapperStyles from '../Wrapper/styles.css';
import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';

function Input(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <input
                className={
                  classNames(styles.input, TypographyStyles.bodyTextNormal, WrapperStyles.short, {
                      [styles.error]: props.errorMessage
                  })
                }
                {...props}
            />
            <Typography
                className={classNames(styles.errorMessage, {
                    [styles.errorMessageActive]: props.errorMessage
                })}
                type="bodyTextNormal"
            >
                {props.errorMessage}
            </Typography>
        </div>
    );
}

Input.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.node
};

export default Input;
