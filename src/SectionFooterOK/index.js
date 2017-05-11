import React from 'react';
import PropTypes from 'prop-types';
import ButtonRaised from './../ButtonRaised';
import styles from './styles.css';
import classNames from 'classnames';

class SectionFooterOK extends React.Component {
    renderRaisedButton(disabled) {
        if (disabled) {
            return (
                <ButtonRaised
                    className={styles.button}
                    disabled
                    onClick={this.props.onClick}
                >
                    <span className={styles.buttonName}>{this.props.buttonName}</span>
                </ButtonRaised>
            );
        }
        return (
            <ButtonRaised
                className={styles.button}
                onClick={this.props.onClick}
            >
                <span className={styles.buttonName}>{this.props.buttonName}</span>
            </ButtonRaised>
        );
    }
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className}
            )}>
                {this.renderRaisedButton(this.props.disabled)}
            </div>
        );
    }
}

SectionFooterOK.propTypes = {
    buttonName: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};

export default SectionFooterOK;
