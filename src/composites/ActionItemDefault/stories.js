import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ActionItemDefault from './index';

storiesOf('ActionItem', module)
  .add('ActionItemDefault', () => (
    <div style={{width: 250}}>
      <ActionItemDefault
        co2={2.7}
        iconSVG={'Transport01'}
        points={15}
        title={'Aktvitet med langt navn'}
      />
    </div>
));
