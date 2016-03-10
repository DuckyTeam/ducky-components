import React from 'react';
import styles from './styles.css';
import Icon from '../Icon';
import Avatar from '../Avatar';
import Typography from '../Typography';
import classNames from 'classnames';

function HeaderCompositActivity(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Icon size={"large1"} icon={props.activityIcon}/>
            <div className={styles.content}>
                <Typography type="bodyTextTitle" className={styles.title}>{props.title}</Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
            <div className={styles.iconWrapper}>
              <Icon icon={props.icon} size="small"/>
              <Typography type="bodyTextTitle">{props.iconValue}</Typography>
            </div>
        </div>
    );
}

HeaderCompositActivity.propTypes = {
    activityIcon: React.PropTypes.string,
    title: React.PropTypes.string,
    icon: React.PropTypes.string,
    iconValue: React.PropTypes.func,
    children: React.PropTypes.any,
    className: React.PropTypes.string
};

export default HeaderCompositActivity;
