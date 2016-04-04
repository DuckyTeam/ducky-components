import Modal from '../Modal';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

function ImageElement(props) {
    return (
        <div
            className={classNames(styles.image, {
                [props.className]: props.className
            })}
            onClick={props.onClick}
            style={{backgroundImage: `url(${props.url})`}}
        >
            {props.onClick ? (
                <Modal
                    onHide={props.onModalHide}
                    show={props.showModal}
                >
                    <img
                        src={props.url}
                        className={styles.modalImage}
                        >
                    </img>
                </Modal>
            ) : null}
        </div>
    );
}

ImageElement.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onModalHide: React.PropTypes.func,
    showModal: React.PropTypes.bool,
    url: React.PropTypes.string
};

export default ImageElement;
