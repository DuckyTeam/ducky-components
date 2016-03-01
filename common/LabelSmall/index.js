import React from "react";
import styles from "./LabelSmall.css";
import Icon from "../Icon";
import Typography from "../typography"
const PropTypes = React.PropTypes;

class LabelSmall extends React.Component {
    render() {
        return (
            <span className={styles.wrapper}>
                <Icon
                    className={styles.pad}
                    icon={this.props.icon}
                    onClick={this.props.onClick}
                    size={'micro'}
                    />
                <Typography type={this.props.type}>{this.props.content}</Typography>
            </span>

        );
    }
}

LabelSmall.displayName = "LabelSmall";
LabelSmall.propTypes = {
    content: PropTypes.any,
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: React.PropTypes.func
};
export default LabelSmall;
