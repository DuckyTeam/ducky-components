import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import PersonItem1 from '../PersonItem1';
const PropTypes = React.PropTypes;

function PersonItem2(props) {

      let opt = '';
      opt = ( <Typography type="caption2Normal">
                  {props.mutualNumber} {' felles personer'}
              </Typography>
          );

      return (
    <div>
        <Wrapper
            className={classNames(styles[props.seen], {
                [props.className]: props.className
            })}
            size={'short'}
        >
          <PersonItem1
          avatarImage={props.avatarImage}
          className= {props.className}
          date= {props.date}
          icon= {props.icon}
          location= {props.location}
          mutualNumber= {props.mutualNumber}
          onClick= {props.onClick}
          type= {props.type}
          userName= {props.userName}
          iconClicked={props.iconClicked}
          />

          </Wrapper>

  </div>
      );
}

  PersonItem2.propTypes = {
      avatarImage:PropTypes.string,
      className: PropTypes.string,
      date: PropTypes.string,
      icon:PropTypes.string,
      location: PropTypes.string,
      mutualNumber: PropTypes.number,
      onClick: React.PropTypes.func,
      type: PropTypes.string,
      userName: PropTypes.string
  };

  export default PersonItem2;