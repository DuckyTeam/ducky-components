import LabelStatistics from '../LabelStatistics';
import LabelHorisontal from '../LabelHorisontal';
import classNames from 'classnames';
import Spacer from '../Spacer';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';


function StatsCarousel1(props) {
    return (
        <span className={styles.wrapper}>
            <div className={styles.labelWrapper}>
                <LabelHorisontal
                    icon={props.icon}
                    text={props.labelText}
                    theme={props.theme}
                />
            </div>
            <Spacer size={'double'} />
            <div className={styles.innerWrapper}>
                <div className={classNames(styles.previous, {
                    [styles.darkPrevious]: props.theme === 'dark'})}
                >
                    <LabelStatistics
                        bgcolor={props.theme}
                        statistics={props.statOne}
                        textcontent={props.textOne}
                    />
                </div>
                <LabelStatistics
                    bgcolor={props.theme}
                    statistics={props.statTwo}
                    textcontent={props.textTwo}
                />
            </div>
        </span>
        );
}


StatsCarousel1.propTypes = {
    icon: PropTypes.string,
    labelText: PropTypes.string,
    statOne: PropTypes.number,
    statTwo: PropTypes.number,
    textOne: PropTypes.string,
    textTwo: PropTypes.string,
    theme: PropTypes.string
};
export default StatsCarousel1;
