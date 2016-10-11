import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function PopoverMenuItem3(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [styles.selected]: props.selected}, {
                    [props.className]: props.className}
            )}
            onClick={props.onClick}
            size={'short'}
        >
            <Typography
                className={styles.text}
                type="bodyTextNormal"
            >
                {props.label}
            </Typography>
            <Icon
                className={styles.icon}
                icon={props.selected ? 'icon-check' : ''}
                size={'small'}
            />
        </Wrapper>
    );
}

PopoverMenuItem3.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.selected
};

export default PopoverMenuItem3;
