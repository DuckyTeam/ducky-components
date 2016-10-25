import {stories, func, string} from '../duckyStories';
import SettingsSectionOne from './index';

stories(module, SettingsSectionOne, [
  'https://github.com/DuckyTeam/ducky-web/issues/1573'
], {
  backgroundImgUrl: string('https://www.ducky.no/images/landing-image-1.jpg'),
  changeCoverImage: func(),
  changeProfileImage: func(),
  description: string('Description'),
  editMode: func(),
  name: string('Per Thomas Normannsen'),
  profileImgUrl: string('https://cloud.githubusercontent.com/assets/13749577/13396610/ea8fe0e8-def5-11e5-8320-c0dd6fafe5bf.png')
});
