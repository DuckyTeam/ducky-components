import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function PopoverMenuItem(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className}
            )}
            size={'squat'}
        >
            <Icon
                className={styles.icon}
                icon={props.icon}
                size={'standard'}
            />
            <Typography
                className={styles.text}
                type={'ingressNormal'}
            >
                {props.label}
            </Typography>
            <Icon
                className={styles.checked}
                icon={props.selected ? 'icon-check' : ''}
                size={'standard'}
            />
        </Wrapper>
    );
}

PopoverMenuItem.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    selected: PropTypes.bool
};

export default PopoverMenuItem;
