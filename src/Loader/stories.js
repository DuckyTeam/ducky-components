import React from 'react'
import {stories, oneOf, bool, func, className, string} from '../duckyStories';
import Loader from './index';

stories(module, Loader, [
  'https://github.com/DuckyTeam/ducky-web/issues/1527',
  'https://github.com/DuckyTeam/ducky-web/issues/1528'
], {
  children: string(),
  className: className(),
  hide: bool(false),
  size: oneOf('mini', 'small', 'standard', 'large')
});

/*import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Loader from './index';
import { withKnobs, boolean} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('Loader', module);
stories.addDecorator(withKnobs);
stories.add('Large', () => (
      <Loader
        size={'large'}/>
))
stories.add('Small', () => (
      <Loader
        size={'small'}/>
))
// Load02 -CSS Loader 2 Mini #1527
stories.add('Mini', () => (
  <div style={{width: 200, height: 200}}>
      <Loader
        size={'mini'}/>
</div>

  ));

  */
