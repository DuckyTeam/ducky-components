import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';
import classNames from 'classnames';
import IconAvaWrapper from '../../common/IconAvaWrapper';

class CreatePostFooter extends React.Component {
    renderIcon() {
        return (
            <IconAvaWrapper
                className={styles.imageIcon}
                icon={this.props.image ? 'icon-photo_camera_checked' : 'icon-add_a_photo'}
            />
        );
    }
    renderFileInput() {
        return (
            <div>
                <input
                    className={styles.input}
                    id="file"
                    onChange={this.props.onFileSelected}
                    type="file"
                />
                <label
                    className={styles.label}
                    htmlFor="file"
                >
                    <IconAvaWrapper
                        className={styles.imageIcon}
                        icon={this.props.image ? 'icon-photo_camera_checked' : 'icon-add_a_photo'}
                    />
                </label>
            </div>
        );
    }
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className
            })}
            >
                {this.props.image ? this.renderIcon() : this.renderFileInput()}
                <div className={styles.border}></div>
                <div className={styles.contentWrapper}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

CreatePostFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    image: PropTypes.bool,
    onFileSelected: PropTypes.func
};

export default CreatePostFooter;
