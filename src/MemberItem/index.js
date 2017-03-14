import React from 'react';
import Wrapper from '../Wrapper';
import ListCompositePerson from '../ListCompositePerson';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function MemberItem(props) {
  return (
    <Wrapper
      className={styles.wrapper}
      onClick={props.onClick}
      size={'standard'}
      >
      <ListCompositePerson
        avatarImage={props.avatarImage}
        caption={props.caption}
        loadingImage={props.loadingImage}
        userName={props.userName}
        />
    </Wrapper>
  );
}

MemberItem.propTypes = {
  avatarImage: PropTypes.string,
  caption: PropTypes.string,
  loadingImage: PropTypes.bool,
  onClick: PropTypes.func,
  userName: PropTypes.string
};

export default MemberItem;
