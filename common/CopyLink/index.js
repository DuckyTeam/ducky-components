import Modal from '../Modal';
import React from 'react';
import SectionHeaderGeneral from '../SectionHeaderGeneral';
import Spacer from '../Spacer';
import Wrapper from '../Wrapper';
import styles from './CopyLink.css';
const PropTypes = React.PropTypes;

class CopyLink extends React.Component {
    constructor(props) {
        super(props);
        this.handleRef = this.handleRef.bind(this);
    }

    componentDidUpdate() {
        this.copyLink.select();
    }

    handleRef(component) {
        this.copyLink = component;
    }

    render() {
        return (
            <Modal
                className={styles.modal}
                onHide={this.props.onModalHide}
                show={this.props.showModal}
            >
                <div className={styles.wrapper}>
                    <SectionHeaderGeneral
                        onClick={this.props.onModalHide}
                        rightIcon={"icon-close"}
                        title="Kopier lenke"
                    />
                    <Wrapper size={'standard'} >
                        <input
                            className={styles.link}
                            readOnly
                            ref={this.handleRef}
                            type={'text'}
                            value={this.props.link}
                        />
                    </Wrapper>
                    <Spacer size={'double'} />
                </div>
            </Modal>
        );
    }
}

CopyLink.propTypes = {
    link: PropTypes.string,
    onModalHide: PropTypes.func,
    showModal: PropTypes.bool
};

export default CopyLink;
