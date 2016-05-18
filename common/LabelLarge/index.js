import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import styles from './LabelLarge.css';
const PropTypes = React.PropTypes;

function LabelLarge(props) {
    return (
        <span className={styles.wrapper}>
            <Icon
                icon={props.icon}
                onClick={props.onClick}
                size={'standard'}
            />
            <br />
            <Typography type={'ingressTitle'}>{props.content}</Typography>
        </span>
    );
}

LabelLarge.displayName = 'LabelLarge';
LabelLarge.propTypes = {
    content: PropTypes.node,
    icon: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelLarge;
