import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

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
    label: PropTypes.number,
    theme: PropTypes.string
};

export default LabelMini;
