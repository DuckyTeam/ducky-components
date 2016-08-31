import Icon from '../Icon';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ButtonMini(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [styles.borderWrapper]: props.theme === 'border',
                [styles.fillWrapper]: props.theme === 'fill',
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Icon
                className={classNames(styles.icon, {
                    [styles.borderIcon]: props.theme === 'border',
                    [styles.fillIcon]: props.theme === 'fill'
                })}
                icon={props.icon}
                size={'micro'}
            />
        </div>
    );
}

ButtonMini.propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    theme: React.PropTypes.oneOf(['border', 'fill'])
};

export default ButtonMini;
