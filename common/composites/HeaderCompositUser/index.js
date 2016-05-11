import Avatar from '../../Avatar';
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
            <Avatar
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
            />
            <div className={styles.content}>
                <Typography
                    className={styles.title}
                    onClick={props.onProfileClick}
                    type="bodyTextTitle"
                >
                    <a href={props.profileLink}>
                        {props.title}
                    </a>
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
                        [styles[(props.category) + 'Icon']]: props.category
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
    avatar: PropTypes.string,
    category: PropTypes.oneOf(['food', 'consumption', 'energy', 'transport', 'social']),
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.string,
    iconValue: PropTypes.string,
    onIconClick: PropTypes.func,
    onProfileClick: PropTypes.func,
    profileLink: PropTypes.string,
    title: PropTypes.string
};

export default HeaderCompositUser;
