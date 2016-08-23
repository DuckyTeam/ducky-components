import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
// import WrapperStyles from '../Wrapper/styles.css';
// import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';

function TextField(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>

            <div className={styles.textField}>
                <label className={styles.controlLabel}
                    htmlFor={'inputNormal'}
                >
                    {props.placeholder}
                </label>
                <textArea
                    className={styles.formControlTextArea}
                    cols={50}
                    id={'text'}
                    maxLength={props.maxLength}
                    rows={1}
                />
            </div>
            <div className={styles.counter}>
                <span id={'totalChars'}>
                    {0}
                </span>
                {'/'} {props.maxLength}
            </div>
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

TextField.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.node,
    maxLength: PropTypes.number,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default TextField;
