
import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function HeaderCompositActivity(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon
                icon={props.activityIcon}
                size={"large1"}
            />
            <div className={styles.content}>
                <Typography
                    className={styles.title}
                    type="bodyTextTitle"
                >
                    {props.title}
                </Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
            <div className={styles.iconWrapper}>
                <Icon
                    icon={props.icon}
                    size="small"
                />
                <Typography
                    type="bodyTextTitle"
                >
                    {props.iconValue}
                </Typography>
            </div>
        </div>
    );
}

HeaderCompositActivity.propTypes = {
    activityIcon: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconValue: React.PropTypes.func,
    title: React.PropTypes.string
};

export default HeaderCompositActivity;
