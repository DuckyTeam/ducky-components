import React from 'react';
import Wrapper from '../Wrapper';
import LeaderboardSeparator1 from '../LeaderboardSeparator1';
import RenderBottomFiveList from './RenderBottomFiveList';
import RenderTopFiveList from './RenderTopFiveList';
import RenderTopTenList from './RenderTopTenList';
import RenderUserClosestList from './RenderUserClosestList';
import styles from './styles.css';

function ParticipationListMobile(props) {
  const {expectedParticipantCounts, participantCounts, sections, sectionKey} = props;
  let currentPosition = null;
  const sortedList = Object.keys(expectedParticipantCounts)
        .map((key, index) => {
          if (sectionKey === key) {
            currentPosition = index;
          }
          return {
            expectedParticipants: expectedParticipantCounts[key],
            isUserSection: sectionKey === key,
            participantCount: participantCounts[key],
            sectionName: sections[key].name,
            percentage: ((participantCounts[key] / expectedParticipantCounts[key]) * 100).toFixed(0)
          };
        }).sort((sectionA, sectionB) => {
          return sectionB.percentage - sectionA.percentage;
        });
  const numberOfSections = sortedList.length;
  const isBottomThree = currentPosition >= numberOfSections - 3;

  if (currentPosition <= 7) {
    return <RenderTopTenList sortedList={sortedList} />;
  }
  if (currentPosition > 7 && !isBottomThree) {
    return (
      <Wrapper
        className={styles.wrapper}
        type={'standard'}
        >
        <RenderTopFiveList sortedList={sortedList} />
        <RenderUserClosestList
          currentPosition={currentPosition}
          sortedList={sortedList}
          />
        <LeaderboardSeparator1 />
      </Wrapper>
    );
  }
  if (isBottomThree) {
    return (
      <Wrapper
        className={styles.wrapper}
        type={'standard'}
        >
        <RenderTopFiveList sortedList={sortedList} />
        <RenderBottomFiveList sortedList={sortedList} />
      </Wrapper>
    );
  }
}

ParticipationListMobile.propTypes = {
  expectedParticipantCounts: React.PropTypes.object,
  participantCounts: React.PropTypes.object,
  sectionKey: React.PropTypes.string,
  sections: React.PropTypes.object
};

export default ParticipationListMobile;
