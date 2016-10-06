import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SectionFooterBack from './index';
import { withKnobs, boolean} from '@kadira/storybook-addon-knobs';

const stories = storiesOf('SectionfooterBack', module);
stories.addDecorator(withKnobs);
stories.add('Initial', () => (
      <SectionfooterBack />
  ));
