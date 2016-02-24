import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function renderItem(value, onClick, iconClass, activeIconClass, isActive) {
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

function PostFooterStandard(props) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.leftColumn}>
              {renderItem(props.values.likes, props.onLikeClick, 'zmdi zmdi-favorite-outline', 'zmdi zmdi-favorite', props.iconStates.like)}
              {renderItem(props.values.comments, props.onCommentClick, 'zmdi zmdi-comment-outline', 'zmdi zmdi-comment', props.iconStates.comment)}
            </div>
            <div className={styles.rightColumn}>
              {renderItem(props.values.bookmarks, props.onBookmarkClick, 'zmdi zmdi-bookmark-outline', 'zmdi zmdi-bookmark', props.iconStates.bookmark)}
              {renderItem(props.values.shares, props.onShareClick, 'zmdi zmdi-share')}
              <div className={classNames('zmdi zmdi-more-vert', styles.icon)}></div>
            </div>
        </div>
    );
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
