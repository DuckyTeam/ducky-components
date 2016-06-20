import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';

function TextLinkElement(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, styles[props.category], {
                [props.className]: props.className
            })}
            size="side-bottom"
        >
            <a
                href={props.children}
                target="_blank"
            >
                <Typography
                    className={classNames(styles.text, styles[props.category])}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
            </a>
        </Wrapper>
    );
}

TextLinkElement.propTypes = {
    category: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

export default TextLinkElement;
