import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CarouselStandard1 from './index';

storiesOf('Carousel', module)
  .add('CarouselStandard1 Right', () => (
    <div style={{backgroundColor: 'darkgrey', width: '300px'}}>
      <CarouselStandard1
        rightactive
        slideCount={5}
        theme={'dark'}
      >
        <div style={{backgroundColor: 'lightblue', height: 200, width: 200}} />
      </CarouselStandard1>
    </div>
))
  .add('CarouselStandard1 Left', () => (
    <div style={{backgroundColor: 'darkgrey', width: '300px'}}>
      <CarouselStandard1
        leftactive
        slideCount={5}
        theme={'dark'}
      >
        <div style={{backgroundColor: 'lightgreen', height: 200, width: 200}} />
      </CarouselStandard1>
    </div>
));
