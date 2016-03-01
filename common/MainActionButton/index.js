import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Icon from '../Icon';

function MainActionButton(props) {
    return (
        <div
          className={classNames(styles.wrapper, {
              [props.className]: props.className,
              [props.icon]: props.icon
          })}
          onClick={props.onClick}>
          <Icon size="standard"/>
        </div>
    );
}

MainActionButton.propTypes = {
    children: React.PropTypes.any,
    icon: React.PropTypes.string,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default MainActionButton;
