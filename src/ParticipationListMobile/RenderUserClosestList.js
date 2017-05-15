import React from 'react';
import PropTypes from 'prop-types';
import ChallengeMeta13 from '../ChallengeMeta13';

function RenderUserClosestList(props) {
  return (
    <div>
      {
        props.sortedList.map((section, index) => {
          if (index === props.currentPosition + 2) {
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
          if (index === props.currentPosition + 1) {
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
          if (index === props.currentPosition) {
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
          if (index === props.currentPosition - 1) {
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
          if (index === props.currentPosition - 2) {
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
    </div>);
}

RenderUserClosestList.propTypes = {
  currentPosition: PropTypes.number,
  sortedList: PropTypes.array
};

export default RenderUserClosestList;
