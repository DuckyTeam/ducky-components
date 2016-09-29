import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CarouselNavigator1 from './index';

storiesOf('Carousel', module)
  .add('CarouselNavigator1', () => (
    <div style={{backgroundColor: 'darkgrey', width: '200px'}}>
      <CarouselNavigator1
        slideCount={5}
        theme={'dark'}
      />
    </div>
));
