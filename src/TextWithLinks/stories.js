import {stories, className, string} from '../duckyStories';
import TextWithLinks from './index';

stories(module, TextWithLinks, [
  'https://github.com/DuckyTeam/ducky-web/issues/1788'
], {
  className: className(),
  children: string('This is a text with an url to http://www.vg.no woop woop! This is awesome! You can even skip http and just do www.google.com!')
});
