import {stories, string} from '../duckyStories';
import Header from './index';

stories(module, Header, [
], {
  children: string('Children'),
  subTitle: string('SubTitle'),
  title: string('Title')
});
