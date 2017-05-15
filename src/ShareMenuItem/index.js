import ActionButton from '../ActionButton';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';


/* eslint-disable max-statements */

function ShareMenuItem(props) {
  const share = props.share;
  let icon = props.icon;
  let text = props.text;
  let bgColour = props.colour;

  if (share) {
      if (share === 'facebook') {
          icon = 'icon-facebook';
          text = 'Facebook';
      } else if (share === 'twitter') {
          icon = 'icon-twitter';
          text = 'Twitter';
      } else if (share === 'google') {
          icon = 'icon-google-plus';
          text = 'Google+';
      } else if (share === 'link') {
          icon = 'icon-link';
          text = 'Kopier lenke';
      }
  }

  return (
      <div
          className={classNames({
              [props.className]: props.className
          })}
          onClick={props.onClick}
      >
          <Wrapper
              className={styles.wrapper}
              size={'short'}
          >
              <ActionButton
                  className={classNames(styles.button, {
                      [styles.bgColourFacebook]: share === 'facebook'
                  })}
                  icon={icon}
                  size={'standard'}
              />
              <Typography
                  className={styles.text}
                  type={'bodyTextNormal'}
              >
                  {text}
              </Typography>
          </Wrapper>
      </div>
  );
}

ShareMenuItem.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  share: PropTypes.oneOf(['facebook', 'twitter', 'google', 'link']),
  text: PropTypes.string
};

export default ShareMenuItem;
