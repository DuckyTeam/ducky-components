import React from 'react';
import {storiesOf} from '@kadira/storybook';
import ActionItemSummaryComposit from './index';

storiesOf('ActionItem', module)
  .add('ActionItemSummaryComposit', () => (
    <div style={{width: 100}}>
      <ActionItemSummaryComposit
        icons={["Consumption01", "Energy01", "Transport02", "Energy02",
            "Energy01", "Transport02", "Energy02", "Energy01", "Transport02",
            "Energy02", "Energy01", "Transport02", "Energy02"
        ]}
      />
    </div>
))
  .add('ActionItemSummaryComposit Expanded', () => (
    <div style={{width: 100}}>
      <ActionItemSummaryComposit
        expanded
        icons={["Consumption01", "Energy01", "Transport02", "Energy02",
            "Energy01", "Transport02", "Energy02", "Energy01", "Transport02",
            "Energy02", "Energy01", "Transport02", "Energy02"
        ]}
      />
    </div>
));
