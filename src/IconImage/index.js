import React from 'react';
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
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    size: React.PropTypes.oneOf(['small', 'standard',
        'large', 'display1', 'display2']),
    style: React.PropTypes.objectOf(React.PropTypes.oneOfType(
        [React.PropTypes.number, React.PropTypes.string]
    ))
};

export default IconImage;
