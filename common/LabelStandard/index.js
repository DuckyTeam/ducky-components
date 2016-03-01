import React from "react";
import styles from "./LabelStandard.css";
import Icon from "../Icon";
import Typography from "../typography"
const PropTypes = React.PropTypes;

class LabelStandard extends React.Component {
    render() {
        return (
            <span className={styles.wrapper}>
                <Icon
                    icon={this.props.icon}
                    onClick={this.props.onClick}
                    size={'small'}
                    />
                <br/>
                <Typography type={"bodyTextTitle"}>{this.props.content}</Typography>
            </span>

        );
    }
}

LabelStandard.displayName = "LabelStandard";
LabelStandard.propTypes = {
    content: PropTypes.any,
    icon: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelStandard;
