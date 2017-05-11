import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';



class SwitchesToggleMenu extends React.Component {
  constructor(props) {
    super(props);
    this.options = this.props.options;
    this.optionCount = this.options.length;
    this.optionWidth = `${100 / this.optionCount}%`;
    this.checkedOption = this.props.checkedOption;
  }
  renderSwitches() {
    return (this.options.map((option, index) => {
      return (
        <div
          className={this.props.checkedOption === index ? styles.optionActive : styles.optionInactive}
          key={index}
          onClick={() => {
            this.checkedOption = this.props.checkedOption;
          }}
          style={{
            width: this.optionWidth
          }}
          >{option}
        </div>
        );
    }));
  }
  render() {
    return (
      <div className={styles.optionContainer}>
        {this.renderSwitches()}
      </div>
    );
  }
}

SwitchesToggleMenu.displayName = 'SwitchesToggleMenu';
SwitchesToggleMenu.propTypes = {
  checkedOption: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string)
};

export default SwitchesToggleMenu;
