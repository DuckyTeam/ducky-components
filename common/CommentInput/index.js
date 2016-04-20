import Avatar from '../Avatar';
import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import TextArea from '../TextArea';
import classNames from 'classnames';


function CommentInput(props) {
    return (
        <Wrapper
            className={classNames(
                styles.wrapper,
                {[props.className]: props.className}
            )}
            size="standard"
        >
            <Avatar
                className={styles.avatar}
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
            />
            <form
                className={styles.form}
                onSubmit={props.onSubmit}
            >
                <Typography
                    className={styles.inputWrapper}
                    type="bodyTextNormal"
                >
                    <TextArea
                        onChange={props.onChange}
                        onSubmit={props.onSubmit}
                        placeholder={props.placeholder}
                        value={props.children}
                    />
                </Typography>
                <button
                    className={styles.button}
                    disabled={props.disabled ||
                              !props.children ||
                              !props.children.length}
                    onClick={props.onSubmit}
                    type="button"
                >
                    <IconAvaWrapper
                        className={styles.icon}
                        icon={"icon-send"}
                    />
                </button>
            </form>
        </Wrapper>
    );
}

CommentInput.propTypes = {
    avatar: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string,
    profileLink: PropTypes.string
};

export default CommentInput;
