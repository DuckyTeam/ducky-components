import React from "react";
import {isoString, timeSince} from "./utils/time";
import styles from "./TimeStamp.css";
import LabelSmall from "../LabelSmall";
const PropTypes = React.PropTypes;

class TimeStamp extends React.Component {
    render() {
        return (
            <LabelSmall
                content={
                    <time
                        dateTime={isoString(this.props.dateTime)}
                        style={Object.assign({}, this.props.style)}
                        >
                        {timeSince(this.props.dateTime, this.props.short)}
                    </time>
                }
                icon={'zmdi zmdi-time'}
                type={"caption2Normal"}
            />
        );
    }
}

TimeStamp.displayName = "TimeStamp";
TimeStamp.propTypes = {
    dateTime: PropTypes.shape({}),
    short: PropTypes.bool,
    style: PropTypes.shape({})
};
export default TimeStamp;
