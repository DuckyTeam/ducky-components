import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import styles from './LabelSmall.css';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function LabelSmall(props) {
    return (
        <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.pad}
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
    content: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: React.PropTypes.func,
    type: PropTypes.string
};
export default LabelSmall;
