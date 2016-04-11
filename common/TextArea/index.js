import React from 'react';
import TypographyCSS from '../Typography/styles.css';
import ReactTextArea from 'react-textarea-autosize';
import styles from './styles.css';
const ENTER_KEY_ID = 13;

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(event) {
        const emptyTextarea = !this.props.value || !this.props.value.length;
        const enterClick = event.which === ENTER_KEY_ID && !event.shiftKey;

        if (this.props.onSubmit && enterClick && emptyTextarea) {
            event.preventDefault();
        } else if (enterClick && this.props.onSubmit) {
            this.props.onSubmit();
            event.preventDefault();
        }
    }
    render() {
        const textType = this.props.textType || 'bodyTextNormal';
        return (
            <ReactTextArea
                className={`${styles.textarea} ${TypographyCSS[textType]}`}
                onChange={this.props.onChange}
                onKeyPress={this.handleKeyPress}
                placeholder={this.props.placeholder}
                value={this.props.value}
            />
        );
    }
}

TextArea.propTypes = {
    onChange: React.PropTypes.func,
    onClick: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    showFullText: React.PropTypes.bool,
    textType: React.PropTypes.oneOf(Object.keys(TypographyCSS)),
    value: React.PropTypes.string
};

export default TextArea;
