import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Avatar from './index';
const AVATAR_URL = 'http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg';

storiesOf('Avatar', module)
  .add('Small (24px)', () => (
    <Avatar
      image={AVATAR_URL}
      onClick={action('clicked small avatar')}
      size={'small'}
    />
))
  .add('Standard (36px)', () => (
    <Avatar
      image={AVATAR_URL}
      onClick={action('clicked standard avatar')}
      size={'standard'}
    />
))
  .add('Large (48px)', () => (
    <Avatar
      image={AVATAR_URL}
      onClick={action('clicked large avatar')}
      size={'large'}
    />
))
  .add('Display1 (72px)', () => (
    <Avatar
      image={AVATAR_URL}
      onClick={action('clicked display1 avatar')}
      size={'display1'}
    />
))
  .add('Display2 (96px)', () => (
    <Avatar
      image={AVATAR_URL}
      onClick={action('clicked display2 avatar')}
      size={'display2'}
    />
));
