import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function PopoverMenuItem4(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className}
            )}
            onClick={props.onClick}
            size={'short'}
        >
            <Icon
                className={styles.icon}
                icon={props.icon}
                size={'small'}
            />
            <Typography
                className={styles.text}
                type="bodyTextNormal"
            >
                {props.label}
            </Typography>
        </Wrapper>
    );
}

PopoverMenuItem4.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default PopoverMenuItem4;
