import React from 'react';
import {PropTypes} from 'react';
import classNames from 'classnames';
import styles from './styles.css';
import Modal from '../Modal';
import SectionHeaderGeneral from '../composites/SectionHeaderGeneral';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Button from '../Button';
import ButtonRaised from '../ButtonRaised';

function ConfirmationModal(props) {
    return (
        <Modal
            className={classNames(styles.wrapper, {[props.className]: props.className})}
            onHide={props.onCancel}
            show={props.show}
        >
            <SectionHeaderGeneral
                onClick={props.onCancel}
                rightIcon="icon-close"
                title={props.title}
            />
            <Wrapper size="standard">
                <Typography type="bodyTextNormal">{props.children}</Typography>
            </Wrapper>
            <div className={styles.buttonWrapper}>
                <Button
                    className={styles.button}
                    onClick={props.onCancel}
                >
                    AVBRYT
                </Button>
                <ButtonRaised
                    className={styles.button}
                    disabled={props.disabled}
                    onClick={props.onConfirm}
                >
                    OK
                </ButtonRaised>
            </div>
        </Modal>
    );
}

ConfirmationModal.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
    show: PropTypes.bool,
    title: PropTypes.string
};

export default ConfirmationModal;
