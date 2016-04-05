import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Avatar from '../Avatar';

function CommentCarousel(props) {
    return (
        <Wrapper size="standard" className={styles.wrapper}>
            <Avatar
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
                className={styles.avatar}
                />
            <div className={styles.textWrapper}>
              <Typography
                  type="bodyTextStrong"
                  className={styles.name}
                  >
                  <a href={props.profileLink}>{props.name}</a>
              </Typography>
              <Typography type="bodyTextNormal">{props.children}</Typography>
            </div>
        </Wrapper>
    );
}

CommentCarousel.propTypes = {
    name: React.PropTypes.string,
    children: React.PropTypes.string,
    avatar: React.PropTypes.string,
    profileLink: React.PropTypes.string
};

export default CommentCarousel;
