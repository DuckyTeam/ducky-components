import React from 'react';
import styles from './App.css';
import Preview from './Preview';

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>/common</h1>
        <h1>/mobile</h1>
        <Preview title="/Button" width={200}>
          <button>test</button>
        </Preview>
        <h1>/pad</h1>
        <h1>/desktop</h1>
      </div>
    );
  }
}
