import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Avatar from '../Avatar';
import classNames from 'classnames';
import styles from './styles.css';


function ChallengeSnackbar1(props) {
  return (
    <Wrapper
      className={classNames(styles.wrapper, props.className)}
      size="standard"
      >
      <Avatar
        className={styles.avatar}
        image={props.avatarImage}
        isLoading={props.isLoadingAvatar}
        size="standard"
        />
      <Typography
        className={styles.text}
        type="bodyTextNormal"
        >
        {props.text}
      </Typography>
    </Wrapper>
  );
}

ChallengeSnackbar1.propTypes = {
  avatarImage: PropTypes.string,
  className: PropTypes.string,
  isLoadingAvatar: PropTypes.bool,
  text: PropTypes.node
};

export default ChallengeSnackbar1;
