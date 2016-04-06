import Avatar from '../Avatar';
import React from 'react';
import {PropTypes} from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function CommentCarousel(props) {
    return (
        <Wrapper
            className={styles.wrapper}
            onClick={props.onClick}
            size="standard"
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
    avatar: PropTypes.string,
    children: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    profileLink: PropTypes.string
};

export default CommentCarousel;
