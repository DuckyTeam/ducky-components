import Spacer from '../Spacer';
import React from 'react';
import ProfilePageMeta from '../composites/ProfilePageMeta';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function ProfileSectionOverallStats(props) {
    return (
        <div className={styles.outerWrapper}>
            <Wrapper
                className={classNames(styles.wrapper, {
                    [props.className]: props.className}
                )}
                size={'side-bottom'}
            >
                <ProfilePageMeta
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
    points: PropTypes.number
};

export default ProfileSectionOverallStats;
