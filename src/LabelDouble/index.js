import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.css';
import Icon from '../Icon';
import Typography from '../Typography';

function LabelDouble(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.icon}
                size="large1"
                style={{color: props.color}}
            />
            <Typography
                className={styles.label}
                type="caption2Normal"
            >
                {props.label}
            </Typography>
            <Typography
                className={styles.description}
                type="caption2Normal"
            >
                {props.description}
            </Typography>
        </div>
    );
}

LabelDouble.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
};

export default LabelDouble;
