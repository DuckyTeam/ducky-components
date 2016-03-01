import Icon from "../Icon";
import React from "react";
import Typography from "../typography";
import styles from "./LabelSmall.css";
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
    content: PropTypes.node,
    icon: PropTypes.string,
    onClick: React.PropTypes.func,
    type: PropTypes.string
};
export default LabelSmall;
