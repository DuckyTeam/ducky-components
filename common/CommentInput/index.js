import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Avatar from '../Avatar';
import IconAvaWrapper from '../IconAvaWrapper';

function CommentInput(props) {
    return (
        <Wrapper size="standard" className={styles.wrapper}>
            <Avatar
                image={props.avatar}
                link={props.profileLink}
                size={"standard"}
                className={styles.avatar}
                />
            <Typography type="bodyTextNormal">
                <input/>
            </Typography>
            <IconAvaWrapper icon={"icon-send"}/>

        </Wrapper>
    );
}

CommentInput.propTypes = {
    name: React.PropTypes.string,
    children: React.PropTypes.string,
    avatar: React.PropTypes.string,
    profileLink: React.PropTypes.string
};

export default CommentInput;
