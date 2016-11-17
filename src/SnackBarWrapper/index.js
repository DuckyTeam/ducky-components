import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import SnackBarPanel1 from '../SnackBarPanel1';
const PropTypes = React.PropTypes;

class SnackBarWrapper extends React.Component {
  renderMessage(message) {
    /* TODO: Check type of message here when there are more types */

    return (
      <SnackBarPanel1 text={message.message} />
    );
  }
  getMessageIndex(revertedIndex) {
    const messagesLength = this.props.messages.length - 1;

    return messagesLength - (messagesLength - revertedIndex);
  }
  renderMessages() {
    return [].concat(this.props.messages).map((message, index) => {
      return (
        <div
          className={styles.messageWrapper}
          key={message.date}
          onAnimationEnd={() => this.props.onDismiss(this.getMessageIndex(index))}
          >
          {this.renderMessage(message)}
        </div>
      );
    })
    .reverse();

    /* reverse() changes the original array, which we need to know the index */
  }
  render() {
    return (
      <div className={classNames(styles.snackbarWrapper, {
        [this.props.className]: this.props.className
      })}>
        {this.renderMessages()}
      </div>
    );
  }
}

SnackBarWrapper.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.shape({
    message: PropTypes.node,
    type: PropTypes.oneOf(['message']),
    date: PropTypes.number
  })),
  onDismiss: PropTypes.func
};

export default SnackBarWrapper;
