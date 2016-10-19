import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class SnackBarWrapper extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={classNames(styles.snackbarWrapper, {
        [this.props.className]: this.props.className})}>
        <div
          className={styles[(this.props.show ? 'showbottom' : 'bottom')]}
          >
          {this.props.children}
        </div>
      </div>
    );
  }
}

SnackBarWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool
};

export default SnackBarWrapper;
