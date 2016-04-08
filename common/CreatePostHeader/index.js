import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Avatar from '../Avatar';
import Typography from '../Typography';

function CreatePostHeader(props) {
    return (
        <div className={classNames(styles.wrapper, {
            [props.className]: props.className
        })}
        >
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
                        {props.name}
                    </a>
                </Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

CreatePostHeader.propTypes = {
    avatar: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    profileLink: PropTypes.string
};

export default CreatePostHeader;
