import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconTabMenu from '../IconTabMenu';

function PeoplePageTabMenu(props) {
  return (
    <IconTabMenu
      changeTab={props.changeTab}
      className={classNames(styles.tabMenu)}
      disabled={props.disabled}
      selected={props.selected}
      tabs={['icon-person_add', 'icon-account-follower', 'icon-account-following']}
      />
  );
}

PeoplePageTabMenu.propTypes = {
  changeTab: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.arrayOf(PropTypes.number),
  selected: PropTypes.string,
  tooltipRequired: PropTypes.bool
};

export default PeoplePageTabMenu;
