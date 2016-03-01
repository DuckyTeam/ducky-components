import React from "react";
import classNames from "classnames";
import styles from "./Avatar.css";
const PropTypes = React.PropTypes;

class Avatar extends React.Component {
    render() {
        const user = this.props.user;
        let imageUri = this.props.image;

        if (user) {
            if (user === "all") {
                imageUri = "http://placehold.it/100x100";
            } else if (user === "friends") {
                imageUri = "http://placehold.it/150x150";
            } else if (user.profile_picture_path) {
                imageUri = `/avatars/square/${user.profile_picture_path.replace(/^avatars\//, "")}`;
            } else if (user.facebook) {
                imageUri = `//graph.facebook.com/${user.facebook.id}/picture?width=200&height=200`;
            } else {
                imageUri = "http://placehold.it/250x250";
            }
        }
        return (
            <a href={this.props.link}>
                <img
                    alt={this.props.name}
                    className={classNames(styles.item, {
                        [styles[this.props.size]]: this.props.size,
                        [this.props.className]: this.props.className
                    })}
                    src={imageUri}
                />
            </a>
        );
    }
}
Avatar.displayName = "Avatar";
Avatar.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.oneOf(["small", "standard", "large", "display1", "display2"]),
    user: PropTypes.oneOfType(
        [PropTypes.shape({
            facebook: PropTypes.shape({
                id: PropTypes.string
            }),
            profilePicturePath: PropTypes.string
        }),
            React.PropTypes.oneOf(["all", "friends"])])
};
export default Avatar;
