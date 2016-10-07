import {stories, oneOf, func, className, string} from '../duckyStories';
import ImageElement from './index';
const IMAGE_URL = 'http://rocketpost.com/media/458905753-e1404928920315.jpg';

stories(module, ImageElement, [
  'https://github.com/DuckyTeam/ducky-web/issues/617'
], {
  className: className(),
  height: string('150'),
  image: oneOf(IMAGE_URL),
  onClick: func(),
  width: string('150')
});
