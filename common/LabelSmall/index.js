import React from 'react';
import styles from './LabelSmall.css';
import Icon from '../Icon';
import Typography from '../typography'
const PropTypes = React.PropTypes;

function LabelSmall(props) {
    return (
        <span className={styles.wrapper}>
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
    content: PropTypes.any,
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelSmall;
