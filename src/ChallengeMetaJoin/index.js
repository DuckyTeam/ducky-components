import React from 'react';
import LabelSmall from '../LabelSmall';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ButtonRaised from '../ButtonRaised';
import classNames from 'classnames';
import styles from './styles.css';
import moment from 'moment';

moment.locale('nb', {
  calendar: {
    lastDay: "D. MMM",
    sameDay: "D. MMM",
    nextDay: "D. MMM",
    lastWeek: "D. MMM",
    nextWeek: "D. MMM",
    sameElse: "D. MMM"
  }
});

class ChallengeMetaJoin extends React.Component {

  getJoinedIndicatorInfo(joined) {
    if (joined === true) {
      const momentStartDate = moment(this.props.startDate).startOf('day').valueOf();
      const momentEndDate = moment(this.props.endDate).startOf('day').valueOf();
      const momentToday = moment(Date.now()).startOf('day').valueOf();
      const daysRemainingToEnd = moment(momentEndDate).diff(momentToday, 'days');
      const daysRemainingToStart = moment(momentStartDate).diff(momentToday, 'days');

      if (momentToday >= momentStartDate && momentToday < momentEndDate && daysRemainingToEnd <= 7) {
        return (
          <Typography
            className={styles.text}
            type={'caption2Normal'}
            >
              {`${this.props.endsInText} ${daysRemainingToEnd} ${this.props.daysText}`}
          </Typography>
        );
      } else if (momentToday < momentStartDate && daysRemainingToStart <= 7) {
        return (
          <Typography
            className={styles.text}
            type={'caption2Normal'}
            >
              {`${this.props.startsInText} ${daysRemainingToStart} ${this.props.daysText}`}
          </Typography>
        );
      }
      return (
        <Typography
          className={styles.text}
          type={'caption2Normal'}
          >
          {`${moment(this.props.startDate).calendar()} - ${moment(this.props.endDate).calendar()}`}
        </Typography>
      );
    }
    return (
      <Typography
        className={styles.text}
        type={'caption2Normal'}
        >
        {`${moment(this.props.startDate).calendar()} - ${moment(this.props.endDate).calendar()}`}
      </Typography>
    );
  }
  getJoinIndicator(joined, noAccess, hideJoinButton) {
    if (noAccess) {
      return (
        <div className={styles.noAccessTextWrapper}>
          <Typography
            className={styles.noAccessText}
            type="caption2Normal"
            >
            {this.props.requiresInviteText}
          </Typography>
          <br />
          <Typography
            className={styles.noAccessTextNotification}
            onClick={this.props.onNotificationsClick}
            type="caption2Strong"
            >
            {this.props.viewNotificationsText}
          </Typography>
        </div>
      );
    }

    if (joined === true) {
      return (
        <LabelSmall
          className={styles.label}
          content="Deltar"
          icon="icon-check"
          type="caption2Normal"
          />
      );
    }

    if (hideJoinButton) {
      return null;
    }

    return (
      <ButtonRaised
        className={styles.button}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        >
        {this.props.joinText}
      </ButtonRaised>
    );
  }
  render() {
    return (
      <div>
        <Wrapper
          className={classNames(styles.wrapper, {
            [this.props.className]: this.props.className
          })}
          size={'side-bottom'}
          >
          {this.getJoinedIndicatorInfo(this.props.joined)}
          <div>
            {this.getJoinIndicator(this.props.joined, this.props.noAccess, this.props.hideJoinButton)}
          </div>
        </Wrapper>
      </div>
    );
  }
}

ChallengeMetaJoin.propTypes = {
  className: React.PropTypes.string,
  daysText: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  endDate: React.PropTypes.number,
  endsInText: React.PropTypes.string,
  hideJoinButton: React.PropTypes.bool,
  joinText: React.PropTypes.string,
  joined: React.PropTypes.bool,
  noAccess: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  onNotificationsClick: React.PropTypes.func,
  requiresInviteText: React.PropTypes.string,
  startDate: React.PropTypes.number,
  startsInText: React.PropTypes.string,
  viewNotificationsText: React.PropTypes.string
};

export default ChallengeMetaJoin;
