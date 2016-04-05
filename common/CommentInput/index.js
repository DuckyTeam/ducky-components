import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Avatar from '../Avatar';
import IconAvaWrapper from '../IconAvaWrapper';
import Textarea from 'react-textarea-autosize';
import TypographyCSS from '../Typography/styles.css';
import classNames from 'classnames';

function CommentInput(props) {
    return (
        <Wrapper size="standard" className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Avatar
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
                className={styles.avatar}
                />
            <form onSubmit={props.onSubmit} className={styles.form}>
                <Typography
                    type="bodyTextNormal"
                    className={styles.inputWrapper}
                    >
                    <Textarea
                        className={`${styles.textarea} ${TypographyCSS.bodyTextNormal}`}
                        placeholder={props.placeholder}
                        value={props.children}
                        onChange={props.onChange}
                        onKeyPress={(e) => {
                          if (e.which === 13 && !e.shiftKey) {
                            props.onSubmit && props.onSubmit();
                            e.preventDefault();
                          }
                        }}
                        >
                    </Textarea>
                </Typography>
                <button type="button" className={styles.button}>
                    <IconAvaWrapper
                        icon={"icon-send"}
                        onClick={props.onSubmit}
                        className={styles.icon}
                        />
                </button>
            </form>
        </Wrapper>
    );
}

CommentInput.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.string,
    avatar: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    onSubmit: React.PropTypes.func,
    onChange: React.PropTypes.func
};

export default CommentInput;
