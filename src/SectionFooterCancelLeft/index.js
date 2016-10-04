import React from 'react';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

class SectionFooterCancelLeft extends React.Component {
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className}
                )}
            >
                <Button
                    className={styles.button}
                    onClick={this.props.onClick}
                >
                    {"AVBRYT"}
                </Button>
            </div>
        );
    }
}

SectionFooterCancelLeft.displayName = "Section Footer Close Left";
SectionFooterCancelLeft.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default SectionFooterCancelLeft;
