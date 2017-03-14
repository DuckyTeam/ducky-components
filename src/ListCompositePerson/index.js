import LabelSmall from '../LabelSmall';
import Avatar from '../Avatar';
import LoaderImagePlaceHolder from '../LoaderImagePlaceHolder';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ListCompositePerson(props) {
  let opt = '';

  if (props.type === 'mutual') {
    opt = (
      <Typography type="caption2Normal">
        {props.mutualNumber} {' felles personer'}
      </Typography>
    );
  } else if (props.type === 'location') {
    opt = (
      <LabelSmall
        content={props.location}
        icon={'icon-room'}
        type={"caption2Normal"}
        />
    );
  } else if (props.type === 'date') {
    opt = (
      <Typography type="caption2Normal">
        {'Medlem siden '} {props.date}
      </Typography>
    );
  } else {
    opt = (
      <Typography type="caption2Normal">
        {props.caption}
      </Typography>
    );
  }
  return (
    <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
      {props.loadingImage
        ? <LoaderImagePlaceHolder className={styles.loader} />
        : <Avatar
          className={styles.avatar}
          image={props.avatarImage}
          size={"standard"}
          />
      }

      <div className={styles.composite}>
        <Typography className={styles.nameTypo}
          type="bodyTextTitle"
          >
          {props.userName}
        </Typography>
        {opt}
      </div>
    </div>
  );
}

ListCompositePerson.propTypes = {
  avatarImage: PropTypes.string,
  caption: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.string,
  loadingImage: PropTypes.bool,
  location: PropTypes.string,
  mutualNumber: PropTypes.number,
  type: PropTypes.oneOf(['mutual', 'location', 'date', null]),
  userName: PropTypes.string
};

export default ListCompositePerson;
