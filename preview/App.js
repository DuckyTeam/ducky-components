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
import PostFooterStandard from '../common/PostFooterStandard';
import TextOnlyElement from '../common/TextOnlyElement';
import Modal from '../common/Modal';
import TopNavigationBar from '../common/TopNavigationBar';

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
            <Preview title="/PostFooterStandard">
                <PostFooterStandard
                  iconStates={{like: false, comment: true, bookmark: false}}
                  values={{likes: 8, comments: 12, bookmarks: 10, shares: 20}}
                  onLikeClick={() => console.log('Clicked like')}
                  onCommentClick={() => console.log('Clicked comment')}
                  onBookmarkClick={() => console.log('Clicked bookmark')}
                  onShareClick={() => console.log('Clicked share')}
                  />
                <PostFooterStandard
                  iconStates={{like: true, comment: false, bookmark: true}}
                  values={{likes: 0, comments: 0, bookmarks: 0, shares: 1933}}
                  onLikeClick={() => console.log('Clicked like')}
                  onCommentClick={() => console.log('Clicked comment')}
                  onBookmarkClick={() => console.log('Clicked bookmark')}
                  onShareClick={() => console.log('Clicked share')}
                  />
            </Preview>

            <Preview title="/TextOnlyElement" width={300}>
              <TextOnlyElement>Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.</TextOnlyElement>
              <TextOnlyElement>Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. Dette er en kjempe fin tekst. Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.</TextOnlyElement>
            </Preview>
          <h1>/mobile</h1>
          <h1>/pad</h1>
          <h1>/desktop</h1>
        </div>
    );
  }
}
