import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles.css';
import SectionFooterCancelOK from '../SectionFooterCancelOK';
import SectionFooterClose from '../SectionFooterClose';

class ModalFullsize extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  handleClick(event) {
    event.stopPropagation();
  }
  renderStickyFooter() {
    if (this.props.onOkClick) {
      return (
        <div className={styles.stickyFooter}>
          <SectionFooterCancelOK
            cancelButtonText={this.props.cancelButtonText}
            okButtonText={this.props.okButtonText}
            onCancel={this.props.onCancel}
            onClick={this.props.onOkClick}
            />
        </div>
      );
    }

    return (
      <div className={styles.stickyFooter}>
        <SectionFooterClose
          closeButtonText={this.props.cancelButtonText}
          onClick={this.props.onCancel}
          />
      </div>
    );
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div
        className={classNames(styles.wrapper, {
          [this.props.className]: this.props.className
        })}
        onClick={this.props.onHide}
        >
        <div
          className={styles.modal}
          onClick={this.handleClick}
          >
          <div
            className={classNames({
              [styles.content]: !this.props.showStickyFooter,
              [styles.contentWithPadding]: this.props.showStickyFooter
            })}
            ref={this.props.modalRef}
            >
            {this.props.children}
          </div>
          {this.props.showStickyFooter ? this.renderStickyFooter() : null}
        </div>
      </div>
    );
  }
}

ModalFullsize.propTypes = {
  cancelButtonText: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  modalRef: PropTypes.func,
  okButtonText: PropTypes.string,
  onCancel: PropTypes.func,
  onHide: PropTypes.func,
  onOkClick: PropTypes.func,
  show: PropTypes.bool,
  showStickyFooter: PropTypes.bool
};

export default ModalFullsize;
