import Avatar from '../Avatar';
import React from 'react';
import TimeStamp from '../TimeStamp';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';


function Comment(props) {
    return (
        <Wrapper className={styles.wrapper}
            size="standard"
        >
            <Avatar
                className={styles.avatar}
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
            />
            <div className={styles.textWrapper}>
                <div className={styles.nameDateWrapper}>
                    <Typography
                        className={styles.name}
                        type="bodyTextStrong"
                    >
                        <a href={props.profileLink}>{props.name}</a>
                    </Typography>
                    <TimeStamp
                        className={styles.timeStamp}
                        dateTime={props.published}
                        short={Boolean(true)}
                    />
                </div>
                <Typography type="bodyTextNormal">{props.children}</Typography>
            </div>
        </Wrapper>
    );
}

Comment.propTypes = {
    avatar: React.PropTypes.string,
    children: React.PropTypes.string,
    name: React.PropTypes.string,
    profileLink: React.PropTypes.string,
    published: React.PropTypes.number
};

export default Comment;
