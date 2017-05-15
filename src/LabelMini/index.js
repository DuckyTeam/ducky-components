import Icon from '../Icon';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';


function LabelMini(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={styles.icon}
                icon={props.icon}
                size={'micro'}
            />
            <Typography
                className={styles.label}
                type="caption1Strong"
            >
                {props.label}
            </Typography>
        </div>
    );
}

LabelMini.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.number
};

export default LabelMini;
