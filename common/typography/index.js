import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Typography(props) {
    return (
        <span className={classNames(styles.wrapper, {
            [styles[props.type]]: props.type,
            [props.className]: props.className
        })}>
          {props.children}
        </span>
    );
}

Typography.propTypes = {
    type: React.PropTypes.oneOf(['caption1Normal', 'caption1Strong']),
    className: React.PropTypes.string,
    children: React.PropTypes.any
};

export default Typography;
