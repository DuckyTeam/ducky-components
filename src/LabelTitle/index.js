import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelTitle(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                className={props.size === 'small' ? styles.iconSmall : styles.iconLarge}
                icon={props.icon}
                size={props.size === 'small' ? 'small' : 'large1'}
            />
            <Typography
                className={styles.text}
                type={props.size === 'small' ? 'ingressTitle' : 'display1'}
            >
                {props.text}
            </Typography>
        </div>
    );
}

LabelTitle.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string
};

export default LabelTitle;
