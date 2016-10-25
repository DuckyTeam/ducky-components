import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import SettingsItem from '../SettingsItem';
import Wrapper from '../Wrapper';
import moment from 'moment';
import PopoverMenuAnchor4 from '../PopoverMenuAnchor4';
const PropTypes = React.PropTypes;

function SettingsItemBirthday(props) {
  return (

    <div className={styles.outerWrapper}>
      <SettingsItem
        expanded={props.expanded}
        handleCloseClick={props.handleCloseClick}
        handleSaveButtonClicked={props.handleSaveButtonClicked}
        inactive={props.inactive}
        label={'Bursdag'}
        onClick={props.onBirthdayClick}
        value={moment(props.birthday).format("Do MMMM YYYY")}
        >
        <div className={classNames(styles.div,
          {[props.className]: props.className})}>
          <Wrapper
            size={'standard'}
            >
            <PopoverMenuAnchor4>
            {props.day}
            </PopoverMenuAnchor4>
            <PopoverMenuAnchor4
              className={styles.monthPopover}
              >
              {props.month}
            </PopoverMenuAnchor4>
            <PopoverMenuAnchor4>
            {props.year}
            </PopoverMenuAnchor4>
          </Wrapper>
        </div>
      </SettingsItem>
    </div>
  );
}


SettingsItemBirthday.propTypes = {
  birthday: PropTypes.number,
  className: PropTypes.string,
  day: PropTypes.number,
  expanded: PropTypes.bool,
  handleCloseClick: PropTypes.func,
  handleSaveButtonClicked: PropTypes.func,
  inactive: PropTypes.bool,
  month: PropTypes.string,
  onBirthdayClick: PropTypes.func,
  value: PropTypes.number,
  year: PropTypes.number
};

export default SettingsItemBirthday;
