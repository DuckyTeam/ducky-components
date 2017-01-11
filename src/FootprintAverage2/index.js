import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import Spacer from '../Spacer';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import styles from './styles.css';

function FootprintAverage2(props) {
  const captionicons = {
    'icon-sentiment_very_satisfied': 'Blant de beste!',
    'icon-tag_faces': 'Kjempebra',
    'icon-sentiment_satisfied': 'Bedre enn snittet',
    'icon-sentiment_neutral': 'Gjennomsnittlig',
    'icon-sentiment_dissatisfied': 'Dårligere enn snittet',
    'icon-mood_bad': 'Ganske dårlige!',
    'icon-sentiment_very_dissatisfied': 'Blant de dårligste!'
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
      <Icon
        className={classNames(styles.icon, {
          [props.className]: props.className,
          [styles[`face${iconcolors[props.icon]}`]]: true
        })}
        icon={props.icon}
        size="large2"
        />
      <span className={styles.text}>
      <Typography
        className={styles.firstRow}
        type="bodyTextNormal"
        >
        {props.text}
      </Typography>
      <Typography
        className={styles.secondRow}
        type="ingressStrong"
        >
        {captionicons[props.icon]}
      </Typography>
      </span>
    </Wrapper>
  );
}

FootprintAverage2.propTypes = {
  className: React.PropTypes.string,
  color: React.PropTypes.string,
  icon: React.PropTypes.oneOf(['icon-sentiment_very_satisfied', 'icon-tag_faces', 'icon-sentiment_satisfied',
  'icon-sentiment_neutral', 'icon-sentiment_dissatisfied', 'icon-mood_bad', 'icon-sentiment_very_dissatisfied'])
};

export default FootprintAverage2;
