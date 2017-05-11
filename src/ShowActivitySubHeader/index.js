import React from 'react';
import PropTypes from 'prop-types';
import LabelSmall from '../LabelSmall';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function ShowActivitySubHeader(props) {
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      <Wrapper
        size="side-bottom"
        >
        <LabelSmall
          icon={props.userLikes ? 'icon-favorite' : 'icon-favorite_border'}
          number={props.favNumber}
          />
        <LabelSmall
          icon={props.userCommented ? 'icon-chat_bubble' : 'icon-chat_bubble_outline'}
          number={props.commentNumber}
          />
        <LabelSmall
          icon={props.userBookmarked ? 'icon-turned_in' : 'icon_turned_in_not'}
          number={props.bookmarkNumber}
          />
        <LabelSmall
          icon="icon-share"
          number={props.shareNumber}
          />
      </Wrapper>
    </div>
  );
}

ShowActivitySubHeader.propTypes = {
  bookmarkNumber: PropTypes.string,
  className: PropTypes.string,
  commentNumber: PropTypes.string,
  favNumber: PropTypes.string,
  shareNumber: PropTypes.string,
  userBookmarked: PropTypes.bool,
  userCommented: PropTypes.bool,
  userLikes: PropTypes.bool
};

export default ShowActivitySubHeader;
