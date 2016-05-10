import React from 'react';
import classNames from 'classnames';
import styles from './Avatar.css';
const PropTypes = React.PropTypes;

function Avatar(props) {
    return (
        <a href={props.link}>
            <img
                alt={props.name}
                className={classNames(styles.item, {
                    [styles[props.size]]: props.size,
                    [props.className]: props.className
                })}
                src={props.image}
            />
        </a>
    );
}
Avatar.displayName = 'Avatar';
Avatar.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(["small", "standard", "large", "display1", "display2"])
};
export default Avatar;
