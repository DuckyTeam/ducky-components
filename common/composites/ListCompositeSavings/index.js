import Icon from '../../Icon';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ListCompositeSavings(props) {
    let icon = 'icon-leaf';
    let text = 'Innsparing kgCO\u2082e';

    if (props.type === 'points') {
        icon = 'icon-brightness_high';
        text = 'Duckypoints';
    }

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.icon}>
                <Icon
                    icon={icon}
                    size={'standard'}
                />
            </div>
            <div className={styles.bodyText}>
                <Typography type="bodyTextNormal">{text}</Typography>
            </div>
            <div className={styles.savings}>
                <Typography type="ingressStrong">+{props.savings}</Typography>
            </div>
        </div>
    );
}

ListCompositeSavings.propTypes = {
    className: PropTypes.string,
    savings: PropTypes.number,
    type: PropTypes.oneOf(['points', 'co2'])
};

export default ListCompositeSavings;
