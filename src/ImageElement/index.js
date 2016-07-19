import Modal from '../Modal';
import React from 'react';
import {PropTypes} from 'react';
import styles from './styles.css';

function ImageElement(props) {
    return (
        <div className={props.className}>
            <div
                className={styles.image}
                onClick={props.onClick}
                style={{backgroundImage: `url(${props.url})`}}
            />
            {props.onClick ? (
                <Modal
                    onHide={props.onModalHide}
                    show={props.showModal}
                >
                    <img
                        className={styles.modalImage}
                        src={props.url}
                    >
                    </img>
                </Modal>
            ) : null}
        </div>
    );
}

ImageElement.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onModalHide: PropTypes.func,
    showModal: PropTypes.bool,
    url: PropTypes.string
};

export default ImageElement;
