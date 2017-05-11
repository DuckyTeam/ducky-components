import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.css';
import WrapperStyles from '../Wrapper/styles.css';
import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';

class InputLarge extends React.Component {
    constructor() {
        super();
        this.state = {
            isFocused: false
        };
    }
    capitalizeFirstLetter(string) {
        if (!string) {
            return '';
        }

        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getCorrectFontClass(size) {
        switch (size) {
        case 'large':
            return TypographyStyles.ingressNormal;
        case 'huge':
            return TypographyStyles.header1;
        default:
            return TypographyStyles.bodyTextNormal;
        }
    }
    render() {
        const {className, value, label, errorMessage, onBlur, onFocus, onChange, size, autoFocus} = this.props;

        /* eslint-disable react/no-set-state */
        return (
            <div className={classNames(styles.wrapper, {[className]: className})}>
                <div className={classNames(styles.inputWrapper, styles[`inputWrapper_${size}`])}>
                    <div
                        className={classNames(styles.label, {
                            [this.getCorrectFontClass(size)]: !this.state.isFocused && !value.length,
                            [TypographyStyles.caption2Normal]: this.state.isFocused || value.length,
                            [styles.labelWithInput]: value.length,
                            [styles.labelFocused]: this.state.isFocused
                        })}
                        type="caption2Normal"
                    >
                        {this.capitalizeFirstLetter(label)}
                    </div>
                    <input
                        autoFocus={autoFocus}
                        className={
                          classNames(styles.input,
                            this.getCorrectFontClass(size),
                            styles[`input_${size}`],
                            WrapperStyles.short, {
                                [styles.error]: errorMessage
                            })
                        }
                        onBlur={() => {
                            this.setState({isFocused: false});
                            if (onBlur) {
                                onBlur();
                            }
                        }}
                        onChange={onChange}
                        onFocus={() => {
                            this.setState({isFocused: true});
                            if (onFocus) {
                                onFocus();
                            }
                        }}
                        value={value}
                    />
                </div>
                <Typography
                    className={classNames(styles.errorMessage, {
                        [styles.errorMessageActive]: errorMessage
                    })}
                    type="bodyTextNormal"
                >
                    {errorMessage}
                </Typography>
            </div>
        );

        /* eslint-enable react/no-set-state */
    }
}

InputLarge.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.node,
    label: PropTypes.node,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.node
};

export default InputLarge;
