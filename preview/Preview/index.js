import React from 'react';
import styles from './styles.css';

export default class Preview extends React.Component {
  render() {
    return (
      <div className={styles.wrapper} style={{width: this.props.width || 'auto', height: this.props.height || 'auto'}}>
        <div className={styles.title}>
          {this.props.title}
        </div>
        <div className={styles.content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
