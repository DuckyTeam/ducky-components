import React from 'react';
import classnames from 'classnames';
import styles from './styles.css';

function Button(props) {
    let buttonType = styles.primary;

    if (props.type) {
        buttonType = styles[props.type];
    }

    return (
        <button
            className={classnames(buttonType, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}

Button.propTypes = {
    children: React.PropTypes.node,
    onClick: React.PropTypes.func,
    type: React.PropTypes.string
};

export default Button;
