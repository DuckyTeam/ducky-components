import React from 'react';
import PropTypes from 'prop-types';
import ChallengeMeta13 from '../ChallengeMeta13';
import LeaderboardSeparator1 from '../LeaderboardSeparator1';

function RenderBottomFiveList(props) {
  const lastIndex = props.sortedList.length - 1;
  const firstIndex = lastIndex - 4;

  return (
    <div>
      {
        props.sortedList.map((section, index) => {
          if (index >= firstIndex && index <= lastIndex) {
            return (
              <ChallengeMeta13
                expectedParticipants={section.expectedParticipants}
                isUserSection={section.isUserSection}
                key={section.sectionName}
                participantCount={section.participantCount}
                sectionName={section.sectionName}
                />
            );
          }
          return null;
        })
      }
      <LeaderboardSeparator1 />
    </div>);
}

RenderBottomFiveList.propTypes = {
  sortedList: PropTypes.array
};

export default RenderBottomFiveList;
