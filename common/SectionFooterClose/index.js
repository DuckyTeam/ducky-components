import React from 'react';
import Button from './../Button';
import styles from './styles.css';
import classNames from 'classnames';

class SectionFooterClose extends React.Component {
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
                    {"LUKK"}
                </Button>
            </div>
        );
    }
}

SectionFooterClose.displayName = "Section Footer Close";
SectionFooterClose.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default SectionFooterClose;
