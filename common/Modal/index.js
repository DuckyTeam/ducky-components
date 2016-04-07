import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick(event) {
      event.stopPropagation();
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
                        onClick={this.onClick}
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
