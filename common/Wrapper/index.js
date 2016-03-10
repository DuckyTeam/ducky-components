import React from 'react';
import classNames from 'classnames';
import styles from './Wrapper.css';
const PropTypes = React.PropTypes;

function Wrapper(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
}

Wrapper.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    hr: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['standard', 'side-bottom', 'side', 'narrow', 'slim', 'short'])
};

export default Wrapper;
