import {stories, string, func, bool, number} from '../duckyStories';
import ChallengeMoreInfoModalMobile from './index';

stories(module, ChallengeMoreInfoModalMobile,
  ['https://github.com/DuckyTeam/ducky-web/issues/1708'],
  {
    content: string('This is the content'),
    heading: string('This is the heading'),
    imgurl: string('https://www.ducky.no/images/landing-image-1.jpg'),
    onHide: func(),
    show: bool(),
    slideCount: number(4),
    currentSlide: number(2)
  });
