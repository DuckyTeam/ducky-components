import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelStandard(props) {
    return (
        <span className={classNames(styles.wrapper, {[props.className]: props.className})}>
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
    className: PropTypes.string,
    content: PropTypes.node,
    icon: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelStandard;
