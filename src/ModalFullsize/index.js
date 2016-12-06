import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import SectionFooterCancelOK from '../SectionFooterCancelOK';
import SectionFooterClose from '../SectionFooterClose';

class ModalFullsize extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
        ref={this.props.ref}
        >
        <div
          className={styles.modal}
          onClick={this.handleClick}
          >
          <div className={classNames({
            [styles.content]: !this.props.showStickyFooter,
            [styles.contentWithPadding]: this.props.showStickyFooter
          })}>
            {this.props.children}
          </div>
          {this.props.showStickyFooter ? this.renderStickyFooter() : null}
        </div>
      </div>
    );
  }
}

ModalFullsize.propTypes = {
  cancelButtonText: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  okButtonText: React.PropTypes.string,
  onCancel: React.PropTypes.func,
  onHide: React.PropTypes.func,
  onOkClick: React.PropTypes.func,
  ref: React.PropTypes.func,
  show: React.PropTypes.bool,
  showStickyFooter: React.PropTypes.bool
};

export default ModalFullsize;
