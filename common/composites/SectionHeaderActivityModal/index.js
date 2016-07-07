import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import ButtonIcon from '../../ButtonIcon';
import classNames from 'classnames';
import styles from './styles.css';

class SectionHeaderActivityModal extends React.Component {
    render() {
        return (
            <div className={classNames(styles.wrapper, {
                [this.props.className]: this.props.className
            })}
            >
                {this.props.favorite
                    ? <div className={styles.buttonIcon}>
                        <ButtonIcon
                            icon={'icon-star-off'}
                            onClick={this.handleButtonOnClick}
                        >
                            {"Legg til favoritter"}
                        </ButtonIcon>
                    </div>
                    : <div className={styles.buttonIcon}>
                        <ButtonIcon
                            icon={'icon-star_border'}
                            onClick={this.handleButtonOnClick}
                        >
                            {"Fjern som favoritt"}
                        </ButtonIcon>
                    </div>
                }

                <div className={styles.iconWrapper}>
                    <IconAvaWrapper
                        icon={'icon-close'}
                        onClick={this.props.onIconClose}
                        size={"standard"}
                    />
                </div>
            </div>
        );
    }
}

SectionHeaderActivityModal.propTypes = {
    className: React.PropTypes.string,
    favorite: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    onIconClose: React.PropTypes.func
};

export default SectionHeaderActivityModal;
