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

    return Object.keys(tabs).map((title, index) => {
      const selectedTab = (index === selected);
      const disabledTab = (disabled.indexOf(index) > -1);
      const icon = tabs[Object.keys(tabs)[index]];

      return (
        <Tooltip
          key={index}
          placement={'top'}
          text={title}
          >
          <button
            className={styles.button}
            disabled={disabledTab}
            onClick={this.handleTabClick.bind(this, index)}
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
    const {tabs} = this.props;

    return Object.keys(tabs).map((title, index) => {
      const selected = (index === this.props.selected);
      const disabled = (this.props.disabled.indexOf(index) > -1);
      const icon = tabs[Object.keys(tabs)[index]];

      return (
        <button
          className={styles.button}
          disabled={disabled}
          key={index}
          onClick={this.handleTabClick.bind(this, index)}
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
