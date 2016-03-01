import React from 'react';
import styles from './styles.css';
import Modal from '../Modal';
import classNames from 'classnames';

function ImageElement(props) {
    return (
        <div
          className={classNames(styles.image, {
              [props.className]: props.className
          })}
          style={{backgroundImage: 'url(' + props.url + ')'}}
          onClick={props.onClick}
          >
          {
            props.onClick ?
              <Modal onHide={props.onModalHide} show={props.showModal}>
                <div className={styles.modalImageWrapper}>
                  <div className={styles.image} style={{backgroundImage: 'url(' + props.url + ')'}}></div>
                </div>
              </Modal>
            :
              null
          }
        </div>
    );
}

ImageElement.propTypes = {
    url: React.PropTypes.string,
    onModalHide: React.PropTypes.func,
    showModal: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string
};

export default ImageElement;
