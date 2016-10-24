import {stories, string, func, bool, number} from '../duckyStories';

import ChallengeMoreInfoModal from './index';

stories(module, ChallengeMoreInfoModal,
  ['https://github.com/DuckyTeam/ducky-web/issues/1706'],
  {
    content: string('this is content'),
    heading: string('this is heading'),
    imgurl: string('https://www.ducky.no/images/landing-image-1.jpg'),
    onHide: func(),
    show: bool(),
    slideCount: number(4)
  });
