import IconAvaWrapper from '../IconAvaWrapper';
import Tooltip from '../Tooltip';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class IconTabMenu extends React.Component {

  handleTabClick(index) {
    this.props.changeTab(index);
  }

  getTabsWithTooltip() {
    const {tabs, selected, disabled} = this.props;

    return Object.keys(tabs).map((tooltip, key) => {
      const selectedTab = (key === selected);
      const disabledTab = (disabled.indexOf(key) > -1);
      const icon = tabs[Object.keys(tabs)[key]];

      return (
        <Tooltip
          key={key}
          placement={'top'}
          text={tooltip}
          >
          <button
            className={styles.button}
            disabled={disabledTab}
            onClick={this.handleTabClick.bind(this, key)}
            >
            <div
              className={classNames(styles.labelWrapper, {
                [styles.selected]: selectedTab,
                [styles.disabled]: disabledTab
              })}
              >
              <IconAvaWrapper
                className={classNames(styles.label, {
                  [styles.selectedLabel]: selectedTab,
                  [styles.disabledLabel]: disabledTab
                })}
                icon={icon}
                />
            </div>
          </button>
        </Tooltip>
      );
    });
  }

  getTabs() {
    return this.props.tabs.map((icon, key) => {
      const selected = (key === this.props.selected);
      const disabled = (this.props.disabled.indexOf(key) > -1);

      return (
        <button
          className={styles.button}
          disabled={disabled}
          key={key}
          onClick={this.handleTabClick.bind(this, key)}
          >
          <div
            className={classNames(styles.labelWrapper, {
              [styles.selected]: selected,
              [styles.disabled]: disabled
            })}
            >
            <IconAvaWrapper
              className={classNames(styles.label, {
                [styles.selectedLabel]: selected,
                [styles.disabledLabel]: disabled
              })}
              icon={icon}
              />
          </div>
        </button>
      );
    });
  }

  render() {
    return (
      <div
        className={classNames(styles.container, {
          [this.props.className]: [this.props.className]
        })}
        >
          {this.props.tooltipRequired && !Array.isArray(this.props.tabs) ? this.getTabsWithTooltip() : this.getTabs()}
      </div>
    );
  }
}

IconTabMenu.propTypes = {
  changeTab: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.arrayOf(React.PropTypes.number),
  selected: PropTypes.number,
  tabs: React.PropTypes.any,
  tooltipRequired: React.PropTypes.bool
};

export default IconTabMenu;
