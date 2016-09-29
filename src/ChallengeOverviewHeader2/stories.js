import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ChalOverHeader from './index';

storiesOf('ChallengeOverviewHeader2', module)
  .add('ChallengeOverviewHeader2', () => (
    <div style={{backgroundColor: 'lightgrey', width: 230}}>
      <ChalOverHeader />
    </div>
));
