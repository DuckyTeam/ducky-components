import React from 'react';
import Icon from '../Icon';
import Wrapper from '../Wrapper';
import Spacer from '../Spacer';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';

const PropTypes = React.PropTypes;

function PlaceholderElement1(props) {
  return (
    <div className={classNames(styles.outerWrapper)}>
      <Spacer size={'double'} />
      <Icon
        className={styles.icon}
        icon={props.icon}
        size={'display2'}
        />
      <Wrapper
        className={styles.textWrapper}
        size={'standard'}
        >
        <Typography
          className={styles.text}
          type={'bodyTextNormal'}
          >
          {props.text}
        </Typography>
      </Wrapper>
    </div>
  );
}

PlaceholderElement1.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string
};

export default PlaceholderElement1;
