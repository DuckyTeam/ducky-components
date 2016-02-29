import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Icon(props) {
    return (
        <span className={classNames(styles.wrapper, {
            [props.icon]: props.icon,
            [styles[props.size]]: props.size,
            [props.className]: props.className
        })} onClick={props.onClick}>
        </span>
    );
}

Icon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    size: React.PropTypes.oneOf(['nano', 'micro', 'mini', 'small', 'standard', 'large1', 'large2', 'display1', 'display2']),
    onClick: React.PropTypes.func
};

export default Icon;
