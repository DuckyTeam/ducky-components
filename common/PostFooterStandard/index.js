import React from 'react';
import styles from './styles.css';
import classNames from 'classnames';

function renderItem(value, iconClass, activeIconClass, isActive) {
    if (value) {
        return (
              <div className={classNames(styles.iconWrapper, {
                  [iconClass]: !isActive,
                  [activeIconClass]: isActive
              })}>
              <span className={styles.value}>{value}</span>
            </div>
        );
    }

    return (
        <div className={classNames(styles.icon, {
            [iconClass]: !isActive,
            [activeIconClass]: isActive
        })}></div>
    );
}

function PostFooterStandard(props) {
    return (
        <div className={styles.wrapper}>
          <i className='zmdi zmdi-share'></i>
            {/* <div className={styles.actionWrapper}>
              <div className={styles.leftColumn}>
                {renderItem(props.values.likes, 'zmdi zmdi-share', 'zmdi zmdi-share', props.iconStates.like)}
                {renderItem(props.values.comments, 'fa fa-comment-o', 'fa fa-comment', props.iconStates.comment)}
              </div>
              <div className={styles.rightColumn}>
                {renderItem(props.values.bookmarks, 'fa fa-bookmark-o', 'fa fa-bookmark', props.iconStates.bookmark)}
                {renderItem(props.values.shares, 'fa fa-share-alt')}
                <div className={classNames('fa fa-ellipsis-v', styles.icon)}></div>
              </div>
            </div> */ }
        </div>
    );
}

PostFooterStandard.propTypes = {
    values: React.PropTypes.object,
    iconStates: React.PropTypes.object,
    children: React.PropTypes.any
};

export default PostFooterStandard;
