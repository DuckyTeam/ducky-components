import {stories, className, oneOf, string, func} from '../duckyStories';
import RemoveImage from './index';
const IMAGE_URL = 'http://rocketpost.com/media/458905753-e1404928920315.jpg';

stories(module, RemoveImage, [
  'https://github.com/DuckyTeam/ducky-web/issues/'
], {
  className: className(),
  height: string('200'),
  image: oneOf(IMAGE_URL),
  onClick: func(),
  width: string('200')
});
