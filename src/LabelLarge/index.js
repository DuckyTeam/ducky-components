import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import styles from './styles.css';


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
    onClick: PropTypes.func
};
export default LabelLarge;
