import React from 'react';
import Avatar from '../Avatar';
import classNames from 'classnames';
import styles from './styles.css';

function PeopleLabel(props) {
    return (
        <div
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            >
            {props.people.slice(0, 5).map((url, key) => {
                return (
                    <Avatar
                        className={styles.avatar}
                        image={url}
                        key={key}
                        size={"small"}
                        />
                );
            })}
        </div>
    );
}

PeopleLabel.propTypes = {
    className: React.PropTypes.string,
    people: React.PropTypes.arrayOf(React.PropTypes.string)
};

export default PeopleLabel;
