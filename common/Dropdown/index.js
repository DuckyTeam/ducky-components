import React from 'react';
import styles from './styles.css';

class Dropdown extends React.Component {
  static propTypes = {
    label: React.PropTypes.any,
    children: React.PropTypes.any,
    right: React.PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.onWindowClick = this.onWindowClick.bind(this);
    this.state = {
      show: false
    };
  }
  onWindowClick(event) {
    const options = this.refs.options;
    let target = event.target;

    while (target) {
      if (target === options) {
        return;
      }
      target = target.parentNode;
    }
    this.setState({
      show: false
    });
    window.removeEventListener('click', this.onWindowClick);
  }
  onToggleClick() {
    this.setState({
      show: !this.state.show
    }, () => {
      if (this.state.show) {
        setTimeout(() => {
          window.addEventListener('click', this.onWindowClick);
        });
      }
    });
  }
  onOptionsClick() {
    this.setState({
      show: false
    });
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.label} onClick={() => this.onToggleClick()}>
          {this.props.label}
        </div>
        {
          this.state.show ?
            <ul ref="options" className={this.props.right ? styles.optionsRight : styles.options} onClick={() => this.onOptionsClick()}>
              {this.props.children}
            </ul>
          :
            null
        }
      </div>
    );
  }
}

export default Dropdown;
