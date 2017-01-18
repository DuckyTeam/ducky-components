import {stories, string} from '../duckyStories';
import FootprintDocumentationDesktop from './index';

stories(module, FootprintDocumentationDesktop, [
  'https://github.com/DuckyTeam/ducky-web/issues/2807'
], {
  readmoreText: string("Lær mer om klimakalkulatoren og beregningene som ligger bak."),
  titlePdfDownload: string('Last ned dokumentasjon (eng.)')
});
