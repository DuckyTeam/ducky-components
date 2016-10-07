import React from 'react';
import ButtonIcon from './../ButtonIcon';
import styles from './styles.css';
import classNames from 'classnames';
import Icon from '../Icon';

class SectionFooterBack extends React.Component {
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className}
                )}
            >
            <ButtonIcon
                icon={'icon-keyboard_arrow_left'}
                onClick={this.props.onClick}
            >
                {"TILBAKE"}
            </ButtonIcon>

            </div>
        );
    }
}

SectionFooterBack.displayName = "Section Footer Back";
SectionFooterBack.propTypes = {
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default SectionFooterBack;
