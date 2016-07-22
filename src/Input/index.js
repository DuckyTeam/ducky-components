import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import WrapperStyles from '../Wrapper/styles.css';
import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';

function Input(props) {
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <input
                className={
                  classNames(styles.input, TypographyStyles.bodyTextNormal, WrapperStyles.short, {
                      [styles.error]: props.errorMessage
                  })
                }
                placeholder={capitalizeFirstLetter(props.placeholder)}
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
    errorMessage: PropTypes.node,
    placeholder: PropTypes.string
};

export default Input;
