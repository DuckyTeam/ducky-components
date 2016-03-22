import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';
const BREAK_TEXT_LENGTH = 415;

function TextOnlyElement(props) {
    let textLength = props.children.length;

    if (typeof props.children !== 'string') {
        textLength = props.children.map((child) => {
            if (typeof child !== 'string') {
                return child.props.children.length;
            }

            return child.length;
        }).reduce((total, value) => {
            return total + value;
        }, 0);
    }

    if (textLength > BREAK_TEXT_LENGTH && !props.showFullText) {
        return (
            <Wrapper size="standard">
                <div
                    className={styles.shadowWrapper}
                    onClick={props.onClick}
                >
                    <Typography
                        className={styles.text}
                        type="bodyTextNormal"
                    >
                        {props.children}
                    </Typography>
                    <div className={styles.gradient}></div>
                </div>
            </Wrapper>
        );
    }

    return (
        <Wrapper size="standard">
            <div
                className={styles.wrapper}
                onClick={props.onClick}
            >
                <Typography
                    className={styles.text}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
            </div>
        </Wrapper>
    );
}

TextOnlyElement.propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func,
    showFullText: React.PropTypes.bool
};

export default TextOnlyElement;
