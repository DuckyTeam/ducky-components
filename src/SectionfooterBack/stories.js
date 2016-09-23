import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SectionfooterBack from './index';
import { withKnobs, boolean} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('SectionfooterBack', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
      <SectionfooterBack />
  ));
