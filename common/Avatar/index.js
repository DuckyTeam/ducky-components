import React from 'react';
import styles from './Avatar.css';
import classNames from 'classnames';
const PropTypes = React.PropTypes;

function Avatar(props) {
    const user = props.user;
    let imageUri = props.image;

    if (user) {
        if (user === 'all') {
            imageUri = 'http://placehold.it/100x100';
        } else if (user === 'friends') {
            imageUri = 'http://placehold.it/150x150';
        } else if (user.profile_picture_path) {
            imageUri = `/avatars/square/${user.profile_picture_path.replace(/^avatars\//, '')}`;
        } else if (user.facebook) {
            imageUri = `//graph.facebook.com/${user.facebook.id}/picture?width=200&height=200`;
        } else {
            imageUri = 'http://placehold.it/250x250';
        }
    }
    return (
        <a href={props.link}>
            <img
                alt={props.name}
                className={classNames(styles.item, {
                    [styles[props.size]]: props.size,
                    [props.className]: props.className
                })}
                src={imageUri}
                />
        </a>
    );
}
Avatar.displayName = 'Avatar';
Avatar.propTypes = {
    className: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string,
    size: PropTypes.oneOf(['small', 'standard', 'large', 'display1', 'display2']),
    name: PropTypes.string,
    user: PropTypes.oneOfType(
        [PropTypes.shape({
            facebook: PropTypes.shape({
                id: PropTypes.string
            }),
            profile_picture_path: PropTypes.string
        }),
            React.PropTypes.oneOf(['all', 'friends'])])
};
export default Avatar;
