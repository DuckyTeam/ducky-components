import React from 'react'
import {stories, bool, oneOf, func, className, string} from '../duckyStories';
import SectionfooterBack from './index';

stories(module, SectionfooterBack, [
  'https://github.com/DuckyTeam/ducky-web/issues/1455',
], {
  className: className(),
  name:oneOf("TILBAKE" ),
  icon: oneOf('icon-leaf',''),
  onClick: func(),
  theme:oneOf("dark", "light"),
  disabled:bool()
})
