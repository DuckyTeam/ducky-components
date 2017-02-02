import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function GraphTopLabel(props) {
  const TeamChallengeCaption = "Innsparing per lag";
  const HouseholdChallengeCaption = "Innsparing per husholdning";
  const IndividualChallengeCaption = "Innsparing per deltager";
  let caption = "";

  if (props.challengeType === 'team') {
    caption = TeamChallengeCaption;
  }
  if (props.challengeType === 'household') {
    caption = HouseholdChallengeCaption;
  }
  if (props.challengeType === 'individual') {
    caption = IndividualChallengeCaption;
  }
  return (
    <Wrapper
      className={styles.wrapper}
      size={'standard'}
      >
      <Typography
        className={styles.text}
        type={'caption1Normal'}
        >
        {caption}
      </Typography>
      <Typography
        className={styles.text}
        type={'caption1Normal'}
        >
        kgCO<sub>2</sub>e
      </Typography>
    </Wrapper>
  );
}

GraphTopLabel.propTypes = {
  caption: React.PropTypes.string,
  challengeType: React.PropTypes.oneOf(['team', 'household', 'individual'])
};

export default GraphTopLabel;
