import Spacer from '../Spacer';
import React from 'react';
import PropTypes from 'prop-types';
import ProfilePageMeta from '../ProfilePageMeta';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import Avatar from '../Avatar';
import styles from './styles.css';


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
                    totalComparisonValue={props.comparisonCo2}
                    totalUserValue={props.co2}
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
                    totalComparisonValue={props.comparisonPoints}
                    totalUserValue={props.points}
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
                    totalComparisonValue={props.comparisonActivities}
                    totalUserValue={props.activities}
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
