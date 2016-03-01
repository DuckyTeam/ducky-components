import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function LabelFooterAction(props) {
    if (props.children) {
        return (
            <span
                className={classNames(styles.iconWrapper, {[props.className]: props.className})}
                onClick={props.onClick}
            >
                <Icon
                    icon={props.icon}
                    size={'standard'}
                />
                <Typography
                    className={styles.value}
                    type={'caption2Normal'}
                >
                    {props.children}
                </Typography>
            </span>
        );
    }

    return (
        <Icon
            className={classNames(styles.icon, {[props.className]: props.className})}
            icon={props.icon}
            onClick={props.onClick}
            size={'standard'}
        />
    );
}

LabelFooterAction.propTypes = {
    children: React.PropTypes.number,
    className: React.PropTypes.shape({}),
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default LabelFooterAction;
