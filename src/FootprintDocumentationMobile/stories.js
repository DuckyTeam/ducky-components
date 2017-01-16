import {stories, string} from '../duckyStories';
import FootprintDocumentationMobile from './index';

stories(module, FootprintDocumentationMobile, [
  'https://github.com/DuckyTeam/ducky-web/issues/2808'
], {
  readmoreText: string("Lær mer om klimakalkulatoren og beregningene som ligger bak."),
  titlePdfDownload: string('Last ned dokumentasjon (eng.)')
});
