import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import HeaderCompositUser from './index';
import LabelPair from '../LabelPair';

const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

storiesOf('HeaderCompositUser', module)
  .add('With icon', () => (
    <div style={{width: 300}}>
      <HeaderCompositUser
        avatar={AVATAR_URL}
        category={'social'}
        icon={'icon-pig'}
        onIconClick={action('clicked')}
        title={'Dette er et langt navn'}
      >
        <LabelPair
          co2={10}
          points={8}
        />
      </HeaderCompositUser>
    </div>
))
  .add('With label pair', () => (
    <div style={{width: 300}}>
      <HeaderCompositUser
        avatar={AVATAR_URL}
        title={'Dette er et langt navn'}
      >
        <LabelPair
          co2={10}
          points={8}
        />
      </HeaderCompositUser>
    </div>
))
  .add('With text', () => (
    <div style={{width: 300}}>
      <HeaderCompositUser
        avatar={AVATAR_URL}
        title={'Dette er et langt navn'}
      >
        {'Whatever you want'}
      </HeaderCompositUser>
    </div>
))
  .add('Nothing added', () => (
    <div style={{width: 300}}>
      <HeaderCompositUser
        avatar={AVATAR_URL}
        title={'Dette er et langt navn'}
      />
    </div>
));
