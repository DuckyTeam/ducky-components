import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import ButtonIcon from '../ButtonIcon';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderActivityModal(props) {
  return (
    <div className={classNames(styles.wrapper, {
      [props.className]: props.className
    })}>
      {props.favorite
        ? <div className={styles.buttonIcon}>
          <ButtonIcon
            icon={'icon-star-off'}
            onClick={props.handleButtonOnClick}
            >
            {"Legg til favoritter"}
          </ButtonIcon>
        </div>
        : <div className={styles.buttonIcon}>
          <ButtonIcon
            icon={'icon-star_border'}
            onClick={props.handleButtonOnClick}
            >
            {"Fjern som favoritt"}
          </ButtonIcon>
        </div>
      }

      <div className={styles.iconWrapper}>
        <IconAvaWrapper
          icon={'icon-close'}
          onClick={props.onIconClose}
          size={"standard"}
          />
      </div>
    </div>
  );
}

SectionHeaderActivityModal.propTypes = {
  className: React.PropTypes.string,
  favorite: React.PropTypes.bool,
  handleButtonOnClick: React.PropTypes.func,
  onClick: React.PropTypes.func,
  onIconClose: React.PropTypes.func
};

export default SectionHeaderActivityModal;
