import React from "react";
import styles from "./Label.css";
import Icon from "../common/Icon";
import Typography from "../common/typography"
const PropTypes = React.PropTypes;

class Label extends React.Component {
    render() {
        return (
            <Icon
                icon={this.props.icon}
                onClick={this.props.onClick}
                size={'micro'}
                />
            <Typography type={this.props.type}>{this.props.content}</Typography>

        );
    }
}

Label.displayName = "Label";
Label.propTypes = {
    content: PropTypes.any,
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: React.PropTypes.func
};
export default Label;
