import {stories, string} from '../duckyStories';
import ChallengeSharePreview from './index';

stories(module, ChallengeSharePreview, [
  'https://github.com/DuckyTeam/ducky-web/issues/2029'
], {
  challengeTitle: string("IKEA Medarbeidercup pluss mere tekst for å sjekke elipsiiiiis"),
  challengeTagline: string("En relativ lang tagline for å sjekke om du leser heeeeeeele teksten mangler endaaaaaa littt"),
  dateFromTo: string("12. mai - 29. aug"),
  icon: string("icon-people"),
  labelContent: string("2.353 deltagere"),
  backgroundImgUrl: string("http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg")
});
