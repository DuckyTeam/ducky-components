import React from 'react'
import {stories, oneOf, bool, className, number, string} from '../duckyStories';
import ChallengeMeta4 from './index';

stories(module, ChallengeMeta4, [

], {
  className,
  isLeader: bool,
  members: number,
  name: string,
  theme: oneOf('dark', 'light'),
  yourTeam: bool
})
