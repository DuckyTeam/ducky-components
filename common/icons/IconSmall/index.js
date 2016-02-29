import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function IconNano(props) {
    return (
        <span className={classNames(styles.wrapper, {
            [props.className]: props.className,
            [props.icon]: props.icon
        })} onClick={props.onClick}>
        </span>
    );
}

IconNano.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default IconNano;
