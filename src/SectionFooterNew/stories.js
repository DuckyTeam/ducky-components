/*import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SectionFooterNew from './index';
import { withKnobs, boolean} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('SectionFooterNew', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
<SectionFooterNew/>

  ));
*/
import React from 'react'
import {stories, oneOf, func, className, string} from '../duckyStories';
import SectionFooterNew from './index';

  stories(module, SectionFooterNew, [
    'https://github.com/DuckyTeam/ducky-web/issues/1455',
    'https://github.com/DuckyTeam/ducky-web/issues/1456',
    'https://github.com/DuckyTeam/ducky-web/issues/1457',
    'https://github.com/DuckyTeam/ducky-web/issues/1458'
], {
    className: className(),
    type:oneOf("TILBAKE", "AVBRYT","TILBAKE-NESTE","AVBRYT-FULL"),
    icon: oneOf('icon-keyboard_arrow_left','')
  })
