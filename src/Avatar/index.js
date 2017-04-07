import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import LoaderImagePlaceHolder from '../LoaderImagePlaceHolder';
const PropTypes = React.PropTypes;

function Avatar(props) {
  if (props.isLoading) {
    return (
      <div
        className={classNames(styles.item, {
          [styles[props.size]]: props.size,
          [props.className]: props.className
        })}
        onClick={props.onClick}
        style={props.style}
        >
        <LoaderImagePlaceHolder
          className={styles.loader}
          size={props.size}
          />
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.item, {
        [styles[props.size]]: props.size,
        [props.className]: props.className
      })}
      onClick={props.onClick}
      style={Object.assign({backgroundImage: `url(${props.image})`}, props.style)}
      >
    </div>
  );
}
Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(["small", "standard", "large", "display1", "display2"]),
  style: PropTypes.any
};
export default Avatar;
