import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import Avatar from '../Avatar';
import Typography from '../Typography';
import IconDropdown from '../IconDropdown';
import LabelSmall from '../LabelSmall';

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
                    type="bodyTextTitle"
                >
                    <a href={props.profileLink}>
                        {props.name}
                    </a>
                </Typography>
                <div className={styles.labelWrapper}>
                    <LabelSmall
                        className={classNames({[styles.inactive]: !props.textActivated})}
                        content={"Tekst"}
                        icon={"icon-mode_edit"}
                        type="caption2Normal"
                    />
                    <Typography
                        className={classNames(styles.label, {
                            [styles.inactive]: !props.textActivated || !props.imageActivated
                        })}
                        type="caption2Normal"
                    >{"+"}</Typography>
                    <LabelSmall
                        className={classNames({[styles.inactive]: !props.imageActivated})}
                        content={"Bilde"}
                        icon={"icon-mode_edit"}
                        type="caption2Normal"
                    />
                    <Typography
                        className={classNames(styles.label, {
                            [styles.inactive]: !props.textActivated && !props.imageActivated
                        })}
                        type={"caption2Normal"}
                    >{"="}</Typography>
                    <LabelSmall
                        className={classNames({
                            [styles.inactive]: !props.textActivated && !props.imageActivated
                        })}
                        content={props.points}
                        icon={"icon-brightness_high"}
                        type="caption2Normal"
                    />
                </div>
            </div>
            <IconDropdown
                icon="icon-public"
                onClick={props.onClick}
            />
        </div>
    );
}

CreatePostHeader.propTypes = {
    avatar: PropTypes.string,
    className: PropTypes.string,
    imageActivated: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    points: PropTypes.number,
    profileLink: PropTypes.string,
    textActivated: PropTypes.bool
};

export default CreatePostHeader;
