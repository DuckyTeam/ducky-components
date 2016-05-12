import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelStandard(props) {
    return (
        <span className={styles.wrapper}>
            <Icon
                className={classNames({
                    [styles.co2Icon]: props.icon === 'icon-leaf'
                })}
                icon={props.icon}
                onClick={props.onClick}
                size={'small'}
            />
            <br />
            <Typography type={'bodyTextTitle'}>{props.content}</Typography>
        </span>
    );
}

LabelStandard.displayName = 'LabelStandard';
LabelStandard.propTypes = {
    content: PropTypes.node,
    icon: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelStandard;
