import React from 'react';
import styles from './App.css';
import Preview from './Preview';
import Header from '../common/Header';
import 'font-awesome/css/font-awesome.css';
import IconImage from "./../common/IconImage/index.js";

import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/Dropdown/Item';

export default class App extends React.Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <h1>/common</h1>
                <Preview title="/Dropdown" width={200}>
                    <Dropdown label={<span>Some label</span>}>
                        <DropdownItem onClick={() => console.log('item1')}>Item 1</DropdownItem>
                        <DropdownItem onClick={() => console.log('item2')}>Item 2</DropdownItem>
                    </Dropdown>
                    <br/>
                    <Dropdown label={<span>Some label</span>} right>
                        <DropdownItem>Item 1</DropdownItem>
                        <DropdownItem>Item 2</DropdownItem>
                    </Dropdown>
                </Preview>
                <Preview title="/IconImage" width={200}>
                    <IconImage/>
                </Preview>
                <Preview title="/Header">
                    <Header title="Logg aktiviteter" subTitle="Favoritter (0)"/>
                </Preview>
                <h1>/mobile</h1>
                <h1>/pad</h1>
                <h1>/desktop</h1>
            </div>
        );
    }
}
