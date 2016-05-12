import Icon from '../../Icon';
import React from 'react';
import Typography from '../../Typography';
import classNames from 'classnames';
import styles from './ListCompositeSavings.css';
const PropTypes = React.PropTypes;

function ListCompositeSavings(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
          <div className={styles.icon}>
            <Icon
              icon={props.icon}
              size={'standard'}
              />
          </div>
          <div className={styles.bodyText}>
            <Typography type="bodyTextNormal">{props.bodyText}</Typography>
          </div>
          <div className={styles.savings}>
            <Typography type="ingressStrong">+{props.savings}</Typography>
          </div>
        </div>
    );
}

ListCompositeSavings.propTypes = {
    icon: PropTypes.string,
    bodyText: PropTypes.string,
    savings: PropTypes.number,
    className: PropTypes.string
};

export default ListCompositeSavings;
