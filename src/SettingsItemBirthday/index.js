import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import SettingsItem from '../SettingsItem';
import Wrapper from '../Wrapper';
import moment from 'moment';
import PopoverMenuAnchor4 from '../PopoverMenuAnchor4';


function SettingsItemBirthday(props) {
  return (
    <div className={styles.outerWrapper}>
      <SettingsItem
        expanded={props.expanded}
        inactive={props.inactive}
        label={'Bursdag'}
        onClick={props.onBirthdayClick}
        onCloseClick={props.handleCloseClick}
        onSaveButtonClicked={props.handleSaveButtonClicked}
        value={moment(props.birthday).format("Do MMMM YYYY")}
        >
        <div className={classNames(styles.expandedContainer,
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
