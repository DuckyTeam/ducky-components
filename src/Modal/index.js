import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    event.stopPropagation();
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    const style = {};

    if (this.props.width) {
      style.width = this.props.width;
      style.minWidth = this.props.width;
    }

    return (
      <div
        className={classNames(styles.backdrop, {
          [this.props.className]: this.props.className
        })}
        onClick={this.props.onHide}
        ref={this.props.modalRef}
        >
        <div className={styles.modalWrapper}>
          <div
            className={styles.modal}
            onClick={this.handleClick}
            style={style}
            >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  modalRef: PropTypes.func,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  width: PropTypes.string
};

export default Modal;
