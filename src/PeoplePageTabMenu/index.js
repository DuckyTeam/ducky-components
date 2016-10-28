import React from 'react';
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
  changeTab: React.PropTypes.func,
  className: React.PropTypes.string,
  disabled: React.PropTypes.arrayOf(React.PropTypes.number),
  selected: React.PropTypes.string,
  tooltipRequired: React.PropTypes.bool
};

export default PeoplePageTabMenu;
