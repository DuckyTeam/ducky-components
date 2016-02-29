import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function PostFooterIcon(props) {
    if (props.children) {
        return (
            <div
              className={classNames(styles.iconWrapper, {
                  [props.icon]: props.icon,
                  [props.className]: props.className
              })}
              onClick={props.onClick}>
            <span className={styles.value}>{props.children}</span>
          </div>
      );
    }

    return (
        <div
          className={classNames(styles.icon, {
              [props.icon]: props.icon,
              [props.className]: props.className
          })}
          onClick={props.onClick}></div>
    );
}

PostFooterIcon.propTypes = {
    children: React.PropTypes.number,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    className: React.PropTypes.object
};

export default PostFooterIcon;
