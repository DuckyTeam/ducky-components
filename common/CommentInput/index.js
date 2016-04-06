import Avatar from '../Avatar';
import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Textarea from 'react-textarea-autosize';
import TypographyCSS from '../Typography/styles.css';
import classNames from 'classnames';
const KEY_ID = 13;

class CommentInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        if (event.which === KEY_ID && !event.shiftKey && this.props.onSubmit) {
            this.props.onSubmit();
            event.preventDefault();
        }
    }

    render() {
        return (
            <Wrapper
                className={classNames(
                    styles.wrapper,
                    {[this.props.className]: this.props.className}
                )}
                size="standard"
            >
                <Avatar
                    className={styles.avatar}
                    image={this.props.avatar}
                    link={this.props.profileLink}
                    size={"standard"}
                />
                <form
                    className={styles.form}
                    onSubmit={this.props.onSubmit}
                >
                    <Typography
                        className={styles.inputWrapper}
                        type="bodyTextNormal"
                    >
                        <Textarea
                            className={`${styles.textarea} ${TypographyCSS.bodyTextNormal}`}
                            onChange={this.props.onChange}
                            onKeyPress={this.handleKeyPress}
                            placeholder={this.props.placeholder}
                            value={this.props.children}
                        />
                    </Typography>
                    <button
                        className={styles.button}
                        type="button"
                    >
                        <IconAvaWrapper
                            className={styles.icon}
                            icon={"icon-send"}
                            onClick={this.props.onSubmit}
                        />
                    </button>
                </form>
            </Wrapper>
        );
    }
}

CommentInput.propTypes = {
    avatar: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    profileLink: PropTypes.string
};

export default CommentInput;
