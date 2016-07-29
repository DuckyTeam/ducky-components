import Icon from '../../Icon';
import React from 'react';
import LabelNumber from '../../LabelNumber';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ProfilePageMetaFollowers(props) {
    let icon = 'icon-person_add';

    if (props.type === 'search') {
        icon = 'icon-account-search';
    } else if (props.type === 'people' && props.isFollowing) {
        icon = 'icon-account-check';
    }

    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <div className={styles.innerWrapper}>
                <LabelNumber
                    number={props.yourFollowers ? props.yourFollowers : 0}
                    textcontent={"følgere"}
                />
            </div>
            <span className={styles.divider} />
            <div className={styles.innerWrapper}>
                <LabelNumber
                    number={props.followedByYou ? props.followedByYou : 0}
                    textcontent={"følger"}
                />
            </div>
            <span className={styles.divider} />
            <div className={styles.innerWrapper}>
                <Icon
                    className={classNames({[styles.icon]: !props.isFollowing},
                        {[styles.iconFollowing]: props.isFollowing}
                    )}
                    icon={icon}
                    onClick={props.onClick}
                    size={'large1'}
                />
            </div>
        </div>
    );
}

ProfilePageMetaFollowers.propTypes = {
    className: PropTypes.string,
    followedByYou: PropTypes.number,
    isFollowing: PropTypes.bool,
    onClick: PropTypes.onClick,
    type: PropTypes.oneOf(['search', 'people']),
    yourFollowers: PropTypes.number
};

export default ProfilePageMetaFollowers;
