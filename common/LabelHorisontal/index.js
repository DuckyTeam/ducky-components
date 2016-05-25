import Icon from '../../Icon';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function LabelHorisontal(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.icon}>
                <Icon
                    icon={props.icon}
                    size={'standard'}
                />
            </div>
            <div className={styles.bodyText}>
                <Typography type="bodyTextNormal">{props.text}</Typography>
            </div>
        </div>
    );
}

LabelHorisontal.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    text: PropTypes.number
};

export default LabelHorisontal;
