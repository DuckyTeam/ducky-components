import React from 'react';
import PropTypes from 'react';
import classNames from 'classnames';
import Spacer from '../Spacer';
import Typography from '../Typography';
import ActionButton from '../ActionButton';
import styles from './styles.css';

function EndOfContent(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Typography
                className={styles.textOne}
                type="bodyTextNormal"
            >
                {"Du har scrollet deg gjennom alt innholdet. Bra jobba!"}
            </Typography>
            <Spacer size={'double'} />
            <ActionButton
                className={styles.actionButton}
                icon={'icon-keyboard_arrow_up'}
                onClick={props.onClick}
                size={'standard'}
            />
            <Spacer size={'standard'} />
            <Typography
                className={styles.textTwo}
                onclick={props.onClick}
                type="bodyTextNormal"
            >
                {"Tilbake til toppen"}
            </Typography>
        </div>
    );
}

EndOfContent.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default EndOfContent;
