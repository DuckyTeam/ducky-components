import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CaptionTabMenu from './index';

storiesOf('Caption Tab Menu', module)
  .add('Split Caption Tab Menu', () => (
    <div style={{width: '500px'}}>
      <CaptionTabMenu
        alignment={'split'}
        disabled={[]}
        selected={0}
        tabs={[
            {label: 'Foo', icon: 'icon-cow'},
            {label: 'Bar', icon: 'icon-duck'}
        ]}
      />
    </div>
))
  .add('Left Caption Tab Menu', () => (
    <div style={{width: '500px'}}>
      <CaptionTabMenu
        alignment={'left'}
        disabled={[]}
        selected={0}
        tabs={[
            {label: 'Foo', icon: 'icon-cow'},
            {label: 'Bar', icon: 'icon-duck'}
        ]}
      />
    </div>
))
  .add('Center Caption Tab Menu', () => (
    <div style={{width: '500px'}}>
      <CaptionTabMenu
        alignment={'center'}
        disabled={[]}
        selected={0}
        tabs={[
            {label: 'Foo', icon: 'icon-cow'},
            {label: 'Bar', icon: 'icon-duck'}
        ]}
      />
    </div>
))
  .add('Default Caption Tab Menu, disabled 2nd tab', () => (
    <div style={{width: '500px'}}>
      <CaptionTabMenu
        disabled={[1]}
        selected={0}
        tabs={[
            {label: 'Foo', icon: 'icon-cow'},
            {label: 'Bar', icon: 'icon-duck'}
        ]}
      />
    </div>
));
