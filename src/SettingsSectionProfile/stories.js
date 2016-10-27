import {stories, className, number, string, func, oneOf} from '../duckyStories';
import SettingsSectionProfile from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

stories(module, SettingsSectionProfile, [
  'https://github.com/DuckyTeam/ducky-web/issues/1572'
], {
  avyURL: oneOf(AVATAR_URL),
  className: className(),
  coverImageURL: string('https://a2ua.com/sea/sea-010.jpg'),
  handleAvyImgClick: func(),
  handleCovImgClick: func(),
  handleFooterOK: func(),
  textAlabel1: string('Fornavn'),
  textAlabel2: string('Etternavn'),
  textAlabel3: string('Beskrivelse'),
  textAvalue1: string(''),
  textAvalue2: string(''),
  textAvalue3: string(''),
  textAmaxLength3: number(140),
  textAplaceholder1: string('Skriv navnet ditt her!'),
  textAsize1: oneOf('default', 'large', 'huge'),
  textAsize2: oneOf('default', 'large', 'huge'),
  textAsize3: oneOf('default', 'large', 'huge')

}
);
