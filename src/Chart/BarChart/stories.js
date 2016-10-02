import React from 'react';
import moment from 'moment';
import {stories, oneOf, icon, func, className, json} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [

], {
  data:json([
      {value: 300, label: "Gunnar"}
    ]),
    goals:json([200, 400, 600, 800]),
    graphID:json(1),
    height:oneOf("300px", "400px"),
    member: json(12),
    selected:json(12)
}, 'Chart/BarChart');
