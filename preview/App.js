import React from 'react';
import styles from './App.css';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';
import IconImage from "./../common/IconImage/index.js";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <h1>/common</h1>
          <Preview title="/IconImage" width={200}>
              <IconImage/>
          </Preview>
        <h1>/mobile</h1>
        <Preview title="/Ducky" width={200}>
            <Ducky title="Hello world!" className={styles.pointsColor}/>
        </Preview>
        <h1>/pad</h1>
        <h1>/desktop</h1>
      </div>
    );
  }
}
