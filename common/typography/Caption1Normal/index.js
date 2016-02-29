import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function Caption1Normal(props) {
    return (
        <span className={classNames(styles.wrapper, {
            [props.className]: props.className
        })}>
          {props.children}
        </span>
    );
}

Caption1Normal.propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.any
};

export default Caption1Normal;
