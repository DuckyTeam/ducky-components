import React from 'react';
import LabelSmall from '../LabelSmall';
import Wrapper from '../Wrapper';

function ShowActivitySubHeader(props) {
  return (
    <div>
      <Wrapper
        size="side-bottom"
        >
        <LabelSmall
          icon="icon-favorite_border"
          number={props.favNumber}
          />
        <LabelSmall
          icon="icon-chat_bubble_outline"
          number={props.commentNumber}
          />
        <LabelSmall
          icon="icon-turned_in_not"
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
  bookmarkNumber: React.PropTypes.string,
  commentNumber: React.PropTypes.string,
  favNumber: React.PropTypes.string,
  icon: React.PropTypes.string,
  shareNumber: React.PropTypes.string,
  size: React.PropTypes.string
};

export default ShowActivitySubHeader;
