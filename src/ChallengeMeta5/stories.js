import React from 'react';
import {storiesOf, action, linkTo} from '@kadira/storybook';
import ChallengeMeta5 from './index';

storiesOf('ChallengeMeta5', module)
  .add('Progress towards level 1', () => (
    <div style={{backgroundColor: '#07495d', width: '320px'}}>
      <ChallengeMeta5
        goal={1000}
        level={1}
        progress={25.72}
      />
    </div>
  ))
  .add('Progress towards level 2', () => (
    <div style={{backgroundColor: '#07495d', width: '320px'}}>
      <ChallengeMeta5
        goal={2000}
        level={2}
        progress={65.72}
      />
    </div>
  ))
  .add('Progress towards level 3', () => (
    <div style={{backgroundColor: '#07495d', width: '320px'}}>
      <ChallengeMeta5
        goal={3000}
        level={3}
        progress={2.72}
      />
    </div>
  ));
