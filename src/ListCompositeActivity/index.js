import LabelPair from '../LabelPair';
import IconImage from '../IconImage';
import React from 'react';
import Typography from '../Typography';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ListCompositeActivity(props) {
  return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
          <IconImage
            className={styles.icon}
            icon={props.icon}
            onClick={props.onIconClick}
            size={"standard"}
            />
          <div className={styles.composite}>
            <Typography
              className={styles.typo}
              onClick={props.onTextClick}
              type={"bodyTextTitle"}
              >
              {props.title}
            </Typography>
            <LabelPair
              co2={props.co2}
              onClick={props.onLabelClick}
              points={props.points}
              />
          </div>
        </div>
    );
}

ListCompositeActivity.propTypes = {
  className: PropTypes.string,
  co2: PropTypes.node,
  icon: PropTypes.string,
  onIconClick: PropTypes.func,
  onLabelClick: PropTypes.func,
  onTextClick: PropTypes.func,
  points: PropTypes.number,
  title: PropTypes.string
};

export default ListCompositeActivity;
