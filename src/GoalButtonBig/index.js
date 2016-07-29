import Icon from '../Icon';
import Typography from '../Typography';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function GoalButtonBig(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            onClick={props.onClick}
        >
            <Icon
                className={styles.icon}
                icon={'icon-add'}
                size="small"
            />
            <Typography
                className={styles.typo}
                type={'caption2Normal'}
            >
                {'Sett nytt mål'}
            </Typography>
        </div>
    );
}

GoalButtonBig.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default GoalButtonBig;
