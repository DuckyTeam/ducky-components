import Wrapper from '../Wrapper';
import LabelTab from '../LabelTab';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class CaptionTabMenu extends React.Component {

  handleTabClick(index) {
    this.props.changeTab(index);
  }

  getTabs() {
    return this.props.tabs.map((pairObject, key) => {
      const selected = (key === this.props.selected);
      const disabled = (this.props.disabled.indexOf(key) > -1);
      const split = (key ===
        (this.props.tabs.length - 1) && this.props.alignment === 'split');

      return (
        <button
          className={classNames(styles.button, {
            [styles.split]: split
          })}
          disabled={disabled}
          key={key}
          onClick={this.handleTabClick.bind(this, key)}
          >
          <Wrapper
            className={classNames(styles.labelWrapper, {
              [styles.split]: split,
              [styles.selected]: selected,
              [styles.disabled]: disabled
            })}
            size={'narrow'}
            >
            <LabelTab
              className={classNames(styles.label, {
                [styles.selectedLabel]: selected,
                [styles.disabledLabel]: disabled
              })}
              icon={pairObject.icon}
              label={pairObject.label}
              />
          </Wrapper>
        </button>
      );
    });
  }

  render() {
    return (
      <div
        className={classNames(styles.container, {
          [styles.center]: this.props.alignment === 'center',
          [this.props.className]: [this.props.className]
        })}
        >
        {this.getTabs()}
      </div>
    );
  }
}

CaptionTabMenu.propTypes = {
  alignment: PropTypes.oneOf(['left', 'center', 'split']),
  changeTab: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.arrayOf(React.PropTypes.number),
  selected: PropTypes.number,
  tabs: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      label: React.PropTypes.string,
      icon: React.PropTypes.string
    })
  )
};

export default CaptionTabMenu;
