import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import TextArea from '../TextArea';
import classNames from 'classnames';


function FeedbackTextInput(props) {
    return (
        <Wrapper
            className={classNames(
                styles.wrapper,
                {[props.className]: props.className}
            )}
            size="standard"
        >
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
                    />
                </Typography>
                <button
                    className={styles.button}
                    disabled={props.disabled}
                    onClick={props.onSubmit}
                    type="submit"
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

FeedbackTextInput.propTypes = {
    className: PropTypes.string,
    disabled: React.PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    placeholder: PropTypes.string
};

export default FeedbackTextInput;
