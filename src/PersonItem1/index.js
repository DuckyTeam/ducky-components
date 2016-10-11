import Icon from '../Icon';
import Avatar from '../Avatar';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function PersonItem1(props) {

      let opt = '';
      opt = ( <Typography type="caption2Normal">
                  {props.mutualNumber} {' felles personer'}
              </Typography>
          );

      return (

      <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
              <Avatar
                  className={styles.avatar}
                  image={props.avatarImage}
                  size={"standard"}
              />
              <div className={styles.composite}>
                  <Typography className={styles.nameTypo}
                      type="bodyTextTitle"
                  >
                      {props.userName}
                  </Typography>
                  {opt}

              </div>
                <div>
                  {props.iconClicked ?
                    <Icon
                      className={styles.icon}
                      content={"Following"}
                      icon={"icon-account-check"}
                    />
                    :
                    <Icon
                      className={styles.iconFollow}
                      icon={"icon-person_add"}
                      onClick={props.onClick}
                    />
                  }
                </div>
            </div>

      );
}

  PersonItem1.propTypes = {
      avatarImage:PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.string,
      icon:PropTypes.string,
      location: PropTypes.string,
      mutualNumber: PropTypes.number,
      onClick: React.PropTypes.func,
      type: PropTypes.string,
      userName: PropTypes.string,
      iconClicked: PropTypes.bool
  };

  export default PersonItem1;
