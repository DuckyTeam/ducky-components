import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import WrapperStyles from '../Wrapper/styles.css';
import TypographyStyles from '../Typography/styles.css';
import Typography from '../Typography';
import TextArea from '../TextArea';

class TextAreaLarge extends React.Component {
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
    countLines(str) {
      return str.split(/\r\n|\r|\n/).length;
    }
    render() {
        const {className, value, label, errorMessage,
          onBlur, onFocus, onChange, maxLength, size} = this.props;

        /* eslint-disable react/no-set-state */
        return (
            <div className={classNames(styles.wrapper, {[className]: className})}>
                <div className={styles.placeholder} />
                <div className={classNames(styles.textareaWrapper, styles[`textareaWrapper_${size}`])}>
                    <div
                        className={classNames(styles.label, {
                            [this.getCorrectFontClass(size)]: !this.state.isFocused && !value.length,
                            [TypographyStyles.caption2Normal]: this.state.isFocused || value.length,
                            [styles.longLineDesc]: this.countLines(value) > 15,
                            [styles.labelWithInput]: value.length,
                            [styles.labelFocused]: this.state.isFocused,
                            [styles[`label_${size}`]]: size
                        })}
                        type="caption2Normal"
                    >
                        {this.capitalizeFirstLetter(label)}
                    </div>
                    <TextArea
                        className={
                          classNames(size ? styles[`textarea_${size}`] : styles.textarea,
                            this.getCorrectFontClass(size),
                            WrapperStyles.short, {
                                [styles.error]: errorMessage
                            })
                        }
                        maxLength={maxLength}
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
                {maxLength && !errorMessage
                ? <Typography
                    className={styles.counter}
                    type="caption2Normal"
                  >
                    {`${value.length} / ${maxLength}`}
                </Typography>
                : null}
            </div>
        );

        /* eslint-enable react/no-set-state */
    }
}

TextAreaLarge.propTypes = {
    className: PropTypes.string,
    errorMessage: PropTypes.node,
    label: PropTypes.node,
    maxLength: PropTypes.node,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(['default', 'large', 'huge']),
    value: PropTypes.node
};

export default TextAreaLarge;
