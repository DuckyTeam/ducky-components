import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function AverageFootprintComparison(props) {
  const captionicons = {
    'icon-sentiment_very_satisfied': 'blant de beste!',
    'icon-tag_faces': 'kjempebra',
    'icon-sentiment_satisfied': 'bedre enn snittet',
    'icon-sentiment_neutral': 'gjennomsnittlige',
    'icon-sentiment_dissatisfied': 'dårligere enn snittet',
    'icon-mood_bad': 'ganske dårlige!',
    'icon-sentiment_very_dissatisfied': 'blant de dårligste!'
  };

  const iconcolors = {
    'icon-sentiment_very_satisfied': 7,
    'icon-tag_faces': 6,
    'icon-sentiment_satisfied': 5,
    'icon-sentiment_neutral': 4,
    'icon-sentiment_dissatisfied': 3,
    'icon-mood_bad': 2,
    'icon-sentiment_very_dissatisfied': 1
  };

  return (
    <Wrapper
      className={classNames(styles.wrapper)}
      size="standard"
      >
      <Spacer size="double" />
      <Typography
        type="ingressStrong"
        >
        Dine matvaner er
      </Typography>
      <Typography
        type="header1"
        >
        {captionicons[props.icon]}
      </Typography>
      <Spacer size="double" />
      <Icon
        className={classNames(styles.icon, {
          [props.className]: props.className,
          [styles[`face${iconcolors[props.icon]}`]]: true
        })}
        icon={props.icon}
        size="display1"
        />
      <Spacer size="double" />
    </Wrapper>
  );
}

AverageFootprintComparison.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.oneOf(['icon-sentiment_very_satisfied', 'icon-tag_faces', 'icon-sentiment_satisfied',
  'icon-sentiment_neutral', 'icon-sentiment_dissatisfied', 'icon-mood_bad', 'icon-sentiment_very_dissatisfied'])
};

export default AverageFootprintComparison;
