import React from 'react';
import styles from './styles.css';

class Modal extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool
  }
  constructor(props) {
    super(props);
    this.onWindowClick = this.onWindowClick.bind(this);
  }
  componentDidMount() {
    if (this.props.show) {
      setTimeout(() => {
        window.addEventListener('click', this.onWindowClick);
      }, 0);
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show && this.props.show) {
      setTimeout(() => {
        window.addEventListener('click', this.onWindowClick);
      }, 0);
    } else if (prevProps.show !== this.props.show) {
      window.removeEventListener('click', this.onWindowClick);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }
  onWindowClick(event) {
    const modal = this.refs.modal;
    let target = event.target;

    while (target) {
      if (target === modal) {
        return;
      }
      target = target.parentNode;
    }
    this.props.onHide();
  }
  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className={styles.backdrop}>
        <div ref="modal" className={styles.modal}>
          <i className={`fa fa-times ${styles.close}`} onClick={() => this.props.onHide()}/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
