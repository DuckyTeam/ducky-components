import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ChallengeMetaJoin from './index';

storiesOf('ChallengeMetaJoin', module)
  .add('Joined', () => (
    <div style={{width: '300px'}}>
      <ChallengeMetaJoin
        endDate={'23-Jul-2016'}
        joined
        startDate={'15-Jul-2016'}
      />
    </div>
))
  .add('Not joined', () => (
    <div style={{width: '300px'}}>
      <ChallengeMetaJoin
        endDate={'15-Jul-2016'}
        startDate={'15-Jul-2016'}
      />
    </div>
));
