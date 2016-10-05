import React from 'react';
import moment from 'moment';
import {stories, oneOf, icon, func, className, json} from './../../duckyStories';
import BarChart from './index';

stories(module, BarChart, [

], {
  data:json([{
    id: 12,
    value: 220,
    color: "#00ab97",
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek1",
    onClick: console.log
  }, {
    id: 13,
    value: 333,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "De nye Gitarkameratene",
    onClick: console.log
  }, {
    id: 14,
    value: 400,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek3"
  }, {
    id: 15,
    value: 173,
    image: "http//:fsfkjsld.no/img.jpg",
    label: "Strek4"
  }]),
    goals:json([200, 400, 600, 800]),
    graphID:json(1),
    height:oneOf("300px", "400px"),
    memberOf: json(12),
    selectedId: json(12),
    onClick: func,
    isMobile: json(1)
}, 'Chart/BarChart');
