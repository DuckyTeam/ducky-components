import React from 'react';
import styles from './styles.css';
import Icon from '../Icon';
import Avatar from '../Avatar';
import Typography from '../Typography';
import classNames from 'classnames';

function HeaderCompositButton(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <Avatar link={props.avatarLink} user={"all"} size={"standard"}/>
            <div className={styles.content}>
                <Typography type="bodyTextTitle" className={styles.title}>{props.title}</Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
            <Icon icon={props.icon} size="large1" onClick={props.onIconClick}/>
        </div>
    );
}

HeaderCompositButton.propTypes = {
    title: React.PropTypes.string,
    icon: React.PropTypes.string,
    avatarLink: React.PropTypes.string,
    onIconClick: React.PropTypes.func,
    children: React.PropTypes.any,
    className: React.PropTypes.string
};

export default HeaderCompositButton;
