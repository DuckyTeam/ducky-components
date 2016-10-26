import {stories, className, string, func, oneOf} from '../duckyStories';
import SettingsSectionProfile from './index';

stories(module, SettingsSectionProfile, [
  'https://github.com/DuckyTeam/ducky-web/issues/1572'
], {
  avyURL: string('https://static.esea.net/global/images/teams/74589.0.jpg'),
  className: className(),
  coverImageURL: string('https://a2ua.com/sea/sea-010.jpg')
}
);
