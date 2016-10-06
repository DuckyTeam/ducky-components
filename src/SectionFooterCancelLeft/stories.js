import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SectionFooterCancelLeft from './index';
// https://github.com/DuckyTeam/ducky-web/issues/1453
storiesOf('SectionFooterCancelLeft', module)
  .add('SectionFooterCancelLeft', () => (
      <SectionFooterCancelLeft />
  ));
