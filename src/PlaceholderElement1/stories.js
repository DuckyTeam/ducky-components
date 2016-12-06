import {
  string,
  stories} from '../duckyStories';

import PlaceholderElement1 from './index';

stories(module, PlaceholderElement1, [
  'https://github.com/DuckyTeam/ducky-web/issues/2128'
], {
  icon: string('icon-duck'),
  text: string('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione repellat deserunt non blanditiis ex inventore rerum corporis fugiat architecto doloremque dolorem suscipit quas sunt fugit, hic similique maiores, dolores voluptatum.')
});
