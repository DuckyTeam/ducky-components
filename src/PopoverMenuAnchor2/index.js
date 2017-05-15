import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import styles from './styles.css';
import Icon from '../Icon';
import Typography from '../Typography';

function PopoverMenuAnchor2(props) {
    return (
        <div
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            onClick={props.onClick}
        >
            <Icon
                className={styles.icon}
                icon={props.icon}
                size="standard"
            />
            <Typography
                className={styles.text}
                type="ingressStrong"
            >
                {props.children}
            </Typography>
            <Icon
                icon="icon-arrow_drop_down"
                size="standard"
            />
        </div>
    );
}

PopoverMenuAnchor2.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func
};

export default PopoverMenuAnchor2;
