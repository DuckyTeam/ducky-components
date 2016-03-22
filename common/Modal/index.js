import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleModalRef = this.handleModalRef.bind(this);
        this.onWindowClick = this.onWindowClick.bind(this);
    }

    componentDidMount() {
        if (this.props.show) {
            setTimeout(() => {
                window.addEventListener('click', this.onWindowClick);
            }, 0);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.show !== this.props.show && this.props.show) {
            setTimeout(() => {
                window.addEventListener('click', this.onWindowClick);
            }, 0);
        } else if (prevProps.show !== this.props.show) {
            window.removeEventListener('click', this.onWindowClick);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onWindowClick);
    }

    handleModalRef(component) {
        this.modal = component;
    }

    onWindowClick(event) {
        let target = event.target;

        while (target) {
            if (target === this.modal) {
                return;
            }
            target = target.parentNode;
        }
        this.props.onHide();
    }

    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div className={classNames(styles.backdrop, {
                [this.props.className]: this.props.className
            })}
            >
                <div className={styles.modalWrapper}>
                    <div
                        className={styles.modal}
                        ref={this.handleModalRef}
                    >
                        <i
                            className={`icon-close ${styles.close}`}
                            onClick={this.props.onHide}
                        />
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool
};

export default Modal;
