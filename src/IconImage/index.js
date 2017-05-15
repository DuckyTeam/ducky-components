import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

function IconImage(props) {
    return (
        <img
            className={classNames(styles.wrapper, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
            src={props.icon}
            style={props.style}
        >
        </img>
    );
}

IconImage.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(['small', 'standard',
        'large', 'display1', 'display2']),
    style: PropTypes.objectOf(PropTypes.oneOfType(
        [PropTypes.number, PropTypes.string]
    ))
};

export default IconImage;
