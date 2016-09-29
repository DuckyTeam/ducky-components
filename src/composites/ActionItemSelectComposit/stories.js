import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ActionItemSelectComposit from './index';
import iconImageImage from "../../assets/SVGIcons/social.svg";

storiesOf('ActionItem', module)
  .add('ActionItemSelectComposit', () => (
    <div style={{width: 200}}>
      <ActionItemSelectComposit
        co2={992.7}
        icon={iconImageImage}
        points={15}
        title={'Aktivitet med langt navn navnesan'}
      />
    </div>
));
