import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function Icon(props) {
    return (
        <span
            className={classNames(styles.wrapper, {
                [props.icon]: props.icon,
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
        </span>
    );
}

Icon.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    size: React.PropTypes.oneOf(['nano', 'micro', 'mini', 'small', 'standard',
        'large1', 'large2', 'display1', 'display2'])
};

export default Icon;
