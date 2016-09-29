import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CardLabel2 from './index';

storiesOf('CardLabel2', module)
  .add('CardLabel2', () => (
    <div style={{width: '300px'}}>
      <CardLabel2
        labelContent={"2,355"}
        text={"Sluttet 23. Apr"}
      />
  </div>
));
