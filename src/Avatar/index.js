import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function Avatar(props) {
    return (
        <div
            className={classNames(styles.item, {
                [styles[props.size]]: props.size,
                [props.className]: props.className
            })}
            onClick={props.onClick}
            style={{backgroundImage: `url(${props.image})`}}
        >
        </div>
    );
}
Avatar.displayName = 'Avatar';
Avatar.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(["small", "standard", "large", "display1", "display2"]),
    style: React.PropTypes.objectOf(React.PropTypes.oneOfType(
        [React.PropTypes.number, React.PropTypes.string]
    ))
};
export default Avatar;
