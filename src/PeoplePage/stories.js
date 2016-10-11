/*import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import PeoplePage from './index';
import { withKnobs, boolean} from '@kadira/storybook-addon-knobs';
import Avatar from './../Avatar';

const stories = storiesOf('PeoplePage', module);
stories.addDecorator(withKnobs);
stories.add('Personer', () => (
      <PeoplePage
      icon= 'icon-person_add'
      userName={"Navn Navnesen"}
      mutualNumber={10}
      avatarImage={"http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg"}
      iconClicked={boolean("Is clicked", false)}

      />

))
*/
import React from 'react';
import {bool, stories, oneOf, func, string, number, className} from '../duckyStories';
import ActionButton from './index';
import Icon from '../Icon'

stories(module, ActionButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/1685'
], {

  avatarImage: string("http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg"),
  className: className(),
  mutualNumber: number(10),
  onClick: func(),
  userName: string(),
  iconClicked: bool(false)
})
