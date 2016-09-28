import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { withKnobs, number, boolean} from '@kadira/storybook-addon-knobs';
import NotificationItem from './index';
import Avatar from './../Avatar';

const stories = storiesOf('Notification Item', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
  <NotificationItem
      dateTime={1475048091000}
      name={'IKEA'}
      onClick={console.log}
      text={"vil registrere deg som ansatt. Godkjenner du dette?"}
      buttonText={"OK"}
      buttonOnClick={console.log}
      buttonClicked={boolean("Is clicked", true)}
  >
      <Avatar
          image={"http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg"}
          onClick={console.log}
          size={"standard"}
      />
  </NotificationItem>
  ));
