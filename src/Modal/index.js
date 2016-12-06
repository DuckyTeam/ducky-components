import React from 'react';
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
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  modalRef: React.PropTypes.func,
  onHide: React.PropTypes.func,
  show: React.PropTypes.bool,
  width: React.PropTypes.string
};

export default Modal;
