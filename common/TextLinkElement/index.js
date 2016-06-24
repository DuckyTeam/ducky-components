import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';

function TextLinkElement(props) {
    function openTab() {
        if (props.onClick) {
            props.onClick();
        }
        const win = window.open(props.children, '_blank');

        win.focus();
    }

    return (
        <Wrapper
            className={classNames(styles.wrapper, styles[props.category], {
                [props.className]: props.className
            })}
            size="side-bottom"
        >
            <div
                className={styles.link}
                onClick={openTab}
                target="_blank"
            >
                <Typography
                    className={classNames(styles.text, styles[props.category])}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
            </div>
        </Wrapper>
    );
}

TextLinkElement.propTypes = {
    category: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func
};

export default TextLinkElement;
