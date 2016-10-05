import {stories, className, bool, json, func} from '../duckyStories';
import ActionItemSummaryComposit from './index';

stories(module, ActionItemSummaryComposit, [
  'https://github.com/DuckyTeam/ducky-web/issues/713'
], {
  className: className(),
  expanded: bool(),
  icons: json(['Consumption01', 'Energy01', 'Transport02', 'Energy02',
      'Energy01', 'Transport02', 'Energy02', 'Energy01', 'Transport02',
      'Energy02', 'Energy01', 'Transport02', 'Energy02'
  ]),
  onClick: func()
});
