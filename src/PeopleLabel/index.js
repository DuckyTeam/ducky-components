import React from 'react';
import Avatar from '../Avatar';
import classNames from 'classnames';
import styles from './styles.css';

const ICON_WIDTH = 24;
const OVERLAP = 7;

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
                        className={classNames(styles.avatar, {
                            [styles.oneItem]: props.people.length <= 1,
                            [styles.twoItem]: props.people.length === 2,
                            [styles.threeItem]: props.people.length === 3,
                            [styles.fourItem]: props.people.length === 4,
                            [styles.fiveItem]: props.people.length >= 5
                        })}
                        image={url}
                        key={key}
                        size={"small"}
                        style={{left: key * (ICON_WIDTH + OVERLAP)}}
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
