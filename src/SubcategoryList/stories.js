import {stories, string, json} from '../duckyStories';
import SubcategoryList from './index';

stories(module, SubcategoryList, [
  'https://github.com/DuckyTeam/ducky-web/issues/1936'
], {
  sortedCategories: json ([
    {
      'percent': 77,
      'color': 'red',
      'label': 'Meiereiprodukter',
      'scaledPercent': 100
    },
    {
      'percent': 45,
      'color': 'blue',
      'label': 'Grønnsaker',
      'scaledPercent': 59
    },
    {
      'percent': 17,
      'color': 'green',
      'label': 'Kjøtt',
      'scaledPercent': 23
    }
  ]),
  title: string("Kategorier")
});
