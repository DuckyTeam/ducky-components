import React from 'react';
import styles from './App.css';
import Preview from './Preview';
import 'font-awesome/css/font-awesome.css';
import './material-ui/css/material-design-iconic-font.css';
import Header from '../common/Header';
import Button from '../common/Button';
import IconImage from '../common/IconImage/index.js';
import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/Dropdown/Item';
import TextOnlyElement from '../common/TextOnlyElement';
import TextImageElement from '../common/TextImageElement';
import ImageOnlyElement from '../common/ImageOnlyElement';
import Modal from '../common/Modal';
import TopNavigationBar from '../common/TopNavigationBar';
import PostFooterIcon from '../common/PostFooterIcon';
import IconNano from '../common/icons/IconNano';
import IconMicro from '../common/icons/IconMicro';
import IconMini from '../common/icons/IconMini';
import IconSmall from '../common/icons/IconSmall';
import IconStandard from '../common/icons/IconStandard';
import IconLarge1 from '../common/icons/IconLarge1';
import IconLarge2 from '../common/icons/IconLarge2';
import IconDisplay1 from '../common/icons/IconDisplay1';
import IconDisplay2 from '../common/icons/IconDisplay2';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          showModal: false
      };
  }
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

            <Preview title="/Modal" width={200}>
              <button onClick={() => this.setState({showModal: true})}>Show modal</button>
              <Modal onHide={() => this.setState({showModal: false})} show={this.state.showModal}>
                Modal content
              </Modal>
            </Preview>

            <Preview title="/IconImage" width={200}>
                <IconImage/>
            </Preview>

            <Preview title="/Header" width={300}>
                <Header title="Logg aktiviteter" subTitle="Favoritter (0)"/>
            </Preview>

            <Preview title="/Button">
                <Button onClick={() => console.log('Clicked button')} type="secondary">
                    Secondary button
                </Button>
                <Button onClick={() => console.log('Clicked button')}>
                    Primary button
                </Button>
            </Preview>

            <Preview title={"TopNavigationBar"} width={900}>
                <TopNavigationBar/>
            </Preview>

            <Preview title="/PostFooterIcon">
              <PostFooterIcon
                onClick={() => console.log('Clicked favorite')}
                icon={'zmdi zmdi-favorite'}>{8}</PostFooterIcon>

              <PostFooterIcon
                onClick={() => console.log('Clicked favorite outlined')}
                icon={'zmdi zmdi-favorite-outline'}/>

              <PostFooterIcon
                onClick={() => console.log('Clicked bookmark')}
                icon={'zmdi zmdi-bookmark-outline'}>{12}</PostFooterIcon>
            </Preview>

            <Preview title="/TextOnlyElement" width={300}>
              <TextOnlyElement>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. <a target="_blank" href="http://www.google.com"> #google</a>
              </TextOnlyElement>
              <TextOnlyElement>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                <a target="_blank" href="http://www.google.com"> #google</a> Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst.
                Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
              </TextOnlyElement>
            </Preview>

            <Preview title="/TextImageElement" width={300}>
              <TextImageElement>
                Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.
                <a target="_blank" href="http://www.google.com"> #google</a>
              </TextImageElement>
            </Preview>

            <Preview title="/ImageOnlyElement" width={300}>
              <ImageOnlyElement
                url="http://funnyasduck.net/wp-content/uploads/2013/01/funny-big-massive-rubber-duck-river-water-quack-motherducker-pics.jpg"
                height={300}/>
            </Preview>

            <Preview title="/icons">
              <div className={styles.subHeader}>IconNano (10px)</div>
              <IconNano icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconNano')}/>
              <div className={styles.subHeader}>IconMicro (12px)</div>
              <IconMicro icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconMicro')}/>
              <div className={styles.subHeader}>IconMini (16px)</div>
              <IconMini icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconMini')}/>
              <div className={styles.subHeader}>IconSmall (20px)</div>
              <IconSmall icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconSmall')}/>
              <div className={styles.subHeader}>IconStandard (24px)</div>
              <IconStandard icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconStandard')}/>
              <div className={styles.subHeader}>IconLarge1 (36px)</div>
              <IconLarge1 icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconLarge1')}/>
              <div className={styles.subHeader}>IconLarge2 (46px)</div>
              <IconLarge2 icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconLarge2')}/>
              <div className={styles.subHeader}>IconDisplay1 (72px)</div>
              <IconDisplay1 icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconDisplay1')}/>
              <div className={styles.subHeader}>IconDisplay2 (96px)</div>
              <IconDisplay2 icon={'zmdi zmdi-favorite'} onClick={() => console.log('Clicked on IconDisplay2')}/>
            </Preview>

          <h1>/mobile</h1>
          <h1>/pad</h1>
          <h1>/desktop</h1>
        </div>
    );
  }
}
