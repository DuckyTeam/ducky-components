import Icon from '../../Icon';
import React from 'react';
import {PropTypes} from 'react';
import Typography from '../../Typography';
import LabelStandard from '../../LabelStandard';
import classNames from 'classnames';
import styles from './styles.css';

function HeaderCompositUser(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.content}>
                <Typography
                    className={classNames(styles.title, {[styles.link]: props.onProfileClick})}
                    onClick={props.onProfileClick}
                    type="bodyTextTitle"
                >
                    {props.title}
                </Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
            {
                props.iconValue
                ? <LabelStandard
                    content={props.iconValue}
                    icon={props.icon}
                  />
                : <Icon
                    className={classNames({
                        [styles[`${props.category}Icon`]]: props.category
                    })}
                    icon={props.icon}
                    onClick={props.onIconClick}
                    size="standard"
                  />
            }
        </div>
    );
}

HeaderCompositUser.propTypes = {
    category: PropTypes.oneOf(['food', 'consumption', 'energy', 'transport', 'social']),
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    iconValue: PropTypes.number,
    onIconClick: PropTypes.func,
    onProfileClick: PropTypes.func,
    title: PropTypes.string
};

export default HeaderCompositUser;
