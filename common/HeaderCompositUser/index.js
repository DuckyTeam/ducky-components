import Avatar from '../Avatar';
import Icon from '../Icon';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

function HeaderCompositUser(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Avatar
                link={props.avatarLink}
                size={"standard"}
                user={"all"}
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
            <Icon
                icon={props.icon}
                onClick={props.onIconClick}
                size="large1"
            />
        </div>
    );
}

HeaderCompositUser.propTypes = {
    avatarLink: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onIconClick: React.PropTypes.func,
    title: React.PropTypes.string
};

export default HeaderCompositUser;
