import React from 'react';
import PropTypes from 'prop-types';
import ChallengeMeta13 from '../ChallengeMeta13';
import LeaderboardSeparator1 from '../LeaderboardSeparator1';

function RenderTopFivelist(props) {
  return (
    <div>
      {
        props.sortedList.map((section, index) => {
          if (index < 5) {
            return (
              <ChallengeMeta13
                expectedParticipants={section.expectedParticipants}
                isUserSection={section.isUserSection}
                key={section.sectionName}
                participantCount={section.participantCount}
                sectionName={section.sectionName}
                />
            );
          } else {
            return null;
          }
        })
      }
      <LeaderboardSeparator1 />
    </div>);
}

RenderTopFivelist.propTypes = {
  sortedList: PropTypes.array
};

export default RenderTopFivelist;
