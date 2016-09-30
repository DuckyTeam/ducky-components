import React from 'react'
import {stories, oneOf, icon, func, className, json} from '../duckyStories';
import ActionButton from './index';

stories(module, ActionButton, [
  'https://github.com/DuckyTeam/ducky-web/issues/624',
  'https://github.com/DuckyTeam/ducky-web/issues/626'
], {
  className,
  icon,
  onClick: func,
  size: oneOf('standard', 'main')
})
