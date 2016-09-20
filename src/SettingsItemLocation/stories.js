import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import SettingsItemLocation from './index';

storiesOf('SettingsItemLocation', module)
  .add('Default', () => (
      <SettingsItemLocation
          selectedCounty={'Sør-Trøndelag'}
      />
  ))
  .add('Edit Mode', () => (
      <div style={{width: 300}}>
          <SettingsItemLocation
              editMode
              selectedCounty={'Sør-Trøndelag'}
          />
      </div>
  ))
  .add('Edit Mode - DropDown Clicked', () => (
      <div style={{width: 300}}>
          <SettingsItemLocation
              editMode
              isFilterPopupOpen
              selectedCounty={'Sør-Trøndelag'}
          />
      </div>
  ));
