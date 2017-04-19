import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import ChallengeMeta13 from '../ChallengeMeta13';
import LeaderboardSeparator1 from '../LeaderboardSeparator1';

function RenderTopTenlist(props) {
  const numberOfSections = props.sortedList.length;

  return (
    <Wrapper
      className={styles.wrapper}
      type={'standard'}
      >
      {
        props.sortedList.map((section, index) => {
          if (index > 9) {
            return null;
          }

          return (
            <ChallengeMeta13
              expectedParticipants={section.expectedParticipants}
              isUserSection={section.isUserSection}
              key={section.sectionName}
              participantCount={section.participantCount}
              sectionName={section.sectionName}
              />
          );
        })
      }
      {numberOfSections < 9 ? null : <LeaderboardSeparator1 />}
    </Wrapper>
  );
}

RenderTopTenlist.propTypes = {
  sortedList: React.PropTypes.array
};

export default RenderTopTenlist;
