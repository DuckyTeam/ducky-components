import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CategoryButtons from './index';

storiesOf('CategoryButtons', module)
  .add('Transport selected', () => (
    <CategoryButtons
      activeCategory={'transport'}
    />
));
