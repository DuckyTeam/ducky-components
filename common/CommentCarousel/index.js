import Avatar from '../Avatar';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CommentCarousel(props) {
    return (
        <Wrapper
            size="standard"
            className={styles.wrapper}
            onClick={props.onClick}
        >
            <Avatar
                className={styles.avatar}
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
            />
            <Typography
                className={styles.textWrapper}
                type="bodyTextStrong"
            >
                <a href={props.profileLink}>
                  {`${props.name}:`}
                </a>
                <Typography
                    className={styles.text}
                    type="bodyTextNormal"
                >
                    {props.children}
                </Typography>
            </Typography>
        </Wrapper>
    );
}

CommentCarousel.propTypes = {
    avatar: React.PropTypes.string,
    children: React.PropTypes.string,
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    profileLink: React.PropTypes.string
};

export default CommentCarousel;
