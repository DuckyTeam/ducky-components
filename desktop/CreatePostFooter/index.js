import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import IconAvaWrapper from '../../common/IconAvaWrapper';

function CreatePostFooter(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            <IconAvaWrapper
                className={styles.imageIcon}
                icon={props.image ? 'icon-photo_camera_checked' : 'icon-add_a_photo'}
            />
            <div className={styles.border}></div>
            <div className={styles.contentWrapper}>
                {props.children}
            </div>
        </div>
    );
}

CreatePostFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    image: PropTypes.bool
};

export default CreatePostFooter;
