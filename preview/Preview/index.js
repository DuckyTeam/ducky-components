import React from 'react';
import styles from './styles.css';

class Preview extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.any,
    width: React.PropTypes.number,
    height: React.PropTypes.number
  }
  render() {
    return (
      <div className={styles.wrapper} style={{width: this.props.width || 'auto', height: this.props.height || 'auto'}}>
        <div className={styles.title}>
          {this.props.title}
        </div>
        <div className={styles.options}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Preview;
