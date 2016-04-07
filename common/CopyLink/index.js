import Modal from '../Modal';
import React from 'react';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Spacer from '../Spacer';
import Wrapper from '../Wrapper';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function CopyLink(props) {
    function onInputMount(input) {
        if (input) {
            input.select();
        }
    }

    return (
        <Modal
            className={styles.modal}
            onHide={props.onModalHide}
            show={props.showModal}
        >
            <div className={styles.wrapper}>
                <SectionHeaderGeneral
                    onClick={props.onModalHide}
                    rightIcon={"icon-close"}
                    title="Kopier lenke"
                />
                <Wrapper
                    className={styles.inputWrapper}
                    size={'standard'}
                >
                    <input
                        className={styles.link}
                        readOnly
                        ref={onInputMount}
                        type={'text'}
                        value={props.link}
                    />
                </Wrapper>
                <Spacer size={'double'} />
            </div>
        </Modal>
    );
}

CopyLink.propTypes = {
    link: PropTypes.string,
    onModalHide: PropTypes.func,
    showModal: PropTypes.bool
};

export default CopyLink;
