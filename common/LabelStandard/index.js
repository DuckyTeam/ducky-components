import React from 'react';
import styles from './LabelStandard.css';
import Icon from '../Icon';
import Typography from '../typography'
const PropTypes = React.PropTypes;

function LabelStandard (props) {
    return (
        <span className={styles.wrapper}>
            <Icon
                icon={props.icon}
                onClick={props.onClick}
                size={'small'}
                />
            <br/>
            <Typography type={'bodyTextTitle'}>{props.content}</Typography>
        </span>

    );
}

LabelStandard.displayName = 'LabelStandard';
LabelStandard.propTypes = {
    content: PropTypes.any,
    icon: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelStandard;
