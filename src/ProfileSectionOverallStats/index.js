import Spacer from '../Spacer';
import React from 'react';
import ProfilePageMeta from '../composites/ProfilePageMeta';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import Avatar from '../Avatar';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ProfileSectionOverallStats(props) {
    return (
        <div className={styles.outerWrapper}>
            {props.toBeCompared
              ? <Wrapper
                  className={styles.wrapper}
                  size={'side-bottom'}
                >
                <div
                  className={styles.comparisonAvatarWrapper}
                >
                  <Avatar
                      image={props.comparisonAvatarUrl}
                      size={"standard"}
                  />
                </div>
                <div
                  className={styles.ownAvatarWrapper}
                >
                  <Avatar
                      image={props.ownAvatarUrl}
                      size={"standard"}
                  />
                </div>
                </Wrapper>
              : null
            }
            <Wrapper
                className={classNames(styles.wrapper, {
                    [props.className]: props.className}
                )}
                size={'side-bottom'}
            >
                <ProfilePageMeta
                    toBeCompared={props.toBeCompared}
                    totalComparison={props.comparisonCo2}
                    totalUser={props.co2}
                    type={'co2'}
                />
            </Wrapper>
            <Wrapper
                className={classNames(styles.wrapper, {
                    [props.className]: props.className}
                )}
                size={'side-bottom'}
            >
                <ProfilePageMeta
                    toBeCompared={props.toBeCompared}
                    totalComparison={props.comparisonPoints}
                    totalUser={props.points}
                    type={'points'}
                />
            </Wrapper>
            <Wrapper
                className={classNames(styles.wrapper, {
                    [props.className]: props.className}
                )}
                size={'side-bottom'}
            >
                <ProfilePageMeta
                    toBeCompared={props.toBeCompared}
                    totalComparison={props.comparisonActivities}
                    totalUser={props.activities}
                    type={'aktiviteter'}
                />
            </Wrapper>
            <Spacer size={'double'} />
        </div>
    );
}

ProfileSectionOverallStats.propTypes = {
    activities: PropTypes.number,
    className: PropTypes.string,
    co2: PropTypes.number,
    comparisonActivities: PropTypes.number,
    comparisonAvatarUrl: PropTypes.string,
    comparisonCo2: PropTypes.number,
    comparisonPoints: PropTypes.number,
    ownAvatarUrl: PropTypes.string,
    points: PropTypes.number,
    toBeCompared: PropTypes.bool
};

export default ProfileSectionOverallStats;
