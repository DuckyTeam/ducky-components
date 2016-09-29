import React from 'react';
import {storiesOf} from '@kadira/storybook';
import CardLabel1 from './index';

storiesOf('ChallengeCardLabel1', module)
  .add('Progress towards goal - challenge not started', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        goal
        type={'points'}
      />
    </div>
))
  .add('Progress towards goal - points', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        goal
        percentValue={26}
        points={43}
        progPercent={29}
        type={'points'}
      />
    </div>
))
  .add('Progress towards goal - co2', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        goal
        percentValue={77}
        points={234.6}
        progPercent={77}
        type={'co2'}
      />
    </div>
))
  .add('Progress towards goal - activities', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        goal
        percentValue={147}
        points={149}
        progPercent={147}
        type={'activities'}
      />
    </div>
))
  .add('Progress if no goal set - not started', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        type={'points'}
      />
    </div>
))
  .add('Progress if no goal set - points', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        percentValue={26}
        points={43}
        progPercent={29}
        type={'points'}
      />
    </div>
))
  .add('Progress if no goal set - co2', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        percentValue={77}
        points={234.6}
        progPercent={77}
        type={'co2'}
      />
    </div>
))
  .add('Progress if no goal set - activities', () => (
    <div style={{width: '300px'}}>
      <CardLabel1
        percentValue={13}
        points={149}
        progPercent={77}
        type={'activities'}
      />
    </div>
));
