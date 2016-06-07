import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import styles from './styles.css';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function LabelSmall(props) {
    return (
        <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={classNames(styles.pad, {
                    [styles.pointsIcon]: props.icon === 'icon-brightness_high',
                    [styles.co2Icon]: props.icon === 'icon-leaf',
                    [props.className]: props.className
                })}
                icon={props.icon}
                onClick={props.onClick}
                size={'micro'}
            />
            <Typography type={props.type}>{props.content}</Typography>
        </span>

    );
}

LabelSmall.displayName = 'LabelSmall';
LabelSmall.propTypes = {
    className: PropTypes.string,
    content: PropTypes.node,
    icon: PropTypes.string,
    onClick: React.PropTypes.func,
    type: PropTypes.string
};
export default LabelSmall;
