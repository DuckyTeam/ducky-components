import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        event.stopPropagation();
    }
    render() {
        if (!this.props.show) {
            return null;
        }

        return (
            <div
                className={classNames(styles.backdrop, {
                    [this.props.className]: this.props.className
                })}
                onClick={this.props.onHide}
            >
                <div className={classNames(styles.modalWrapper, {
                    [styles.fullSize]: this.props.fullSize
                })}
                >
                    <div
                        className={classNames(styles.modal, {
                            [styles.fullSize]: this.props.fullSize
                        })}
                        onClick={this.handleClick}
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
    fullSize: React.PropTypes.bool,
    onHide: React.PropTypes.func.isRequired,
    show: React.PropTypes.bool
};

export default Modal;
