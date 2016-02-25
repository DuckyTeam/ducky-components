import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

class PostFooterStandard extends React.Component {
  constructor(props) {
      super(props);
  }
  renderItem(value, onClick, iconClass, activeIconClass, isActive) {
      if (value) {
          return (
                <div
                  className={classNames(styles.iconWrapper, {
                      [iconClass]: !isActive,
                      [activeIconClass]: isActive
                  })}
                  onClick={onClick}>
                <span className={styles.value}>{value}</span>
              </div>
          );
      }

      return (
          <div
            className={classNames(styles.icon, {
                [iconClass]: !isActive,
                [activeIconClass]: isActive
            })}
            onClick={onClick}></div>
      );
  }
  render() {
      return (
        <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
              {this.renderItem(
                this.props.values.likes,
                this.props.onLikeClick,
                'zmdi zmdi-favorite-outline',
                'zmdi zmdi-favorite',
                this.props.iconStates.like)}

              {this.renderItem(
                this.props.values.comments,
                this.props.onCommentClick,
                'zmdi zmdi-comment-outline',
                'zmdi zmdi-comment',
                this.props.iconStates.comment)}
            </div>
            <div className={styles.rightColumn}>
              {this.renderItem(
                this.props.values.bookmarks,
                this.props.onBookmarkClick,
                'zmdi zmdi-bookmark-outline',
                'zmdi zmdi-bookmark',
                this.props.iconStates.bookmark)}

              {this.renderItem(this.props.values.shares, this.props.onShareClick, 'zmdi zmdi-share')}
              <div className={classNames('zmdi zmdi-more-vert', styles.icon)}></div>
            </div>
        </div>
      );
  }
}

PostFooterStandard.propTypes = {
    values: React.PropTypes.object,
    iconStates: React.PropTypes.object,
    children: React.PropTypes.any,
    onBookmarkClick: React.PropTypes.func,
    onLikeClick: React.PropTypes.func,
    onCommentClick: React.PropTypes.func,
    onShareClick: React.PropTypes.func
};

export default PostFooterStandard;
