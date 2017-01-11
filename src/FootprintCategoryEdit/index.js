import React from 'react';
import classNames from 'classnames';
import IconAvaWrapper from '../IconAvaWrapper';
import Spacer from '../Spacer';
import LabelNumberDisplay from '../LabelNumberDisplay';
import styles from './styles.css';

function FootprintCategoryEdit(props) {
  return (
    <div
      className={classNames(styles.outerWrap, {
        [styles.cursorPointer]: props.onClick
      })}
      onClick={props.onClick}
      >
      <Spacer
        className={styles.topSpacer}
        size="standard"
        />
      <div className={styles.innerWrap}>
        <div className={styles.forcing}>
          <LabelNumberDisplay
            className={styles.labelNumberDisplay}
            icon={props.icon || 'icon-gnome'}
            label={props.label}
            value={props.value}
            />
        </div>
        {
          props.rightIcon
          ? <IconAvaWrapper
            icon={props.rightIcon}
            />
          : null
        }
      </div>
      <Spacer
        className={styles.bottomSpacer}
        size="standard"
        />
    </div>
  );
}

FootprintCategoryEdit.propTypes = {
  icon: React.PropTypes.string,
  label: React.PropTypes.node,
  onClick: React.PropTypes.func,
  rightIcon: React.PropTypes.string,
  value: React.PropTypes.node
};

export default FootprintCategoryEdit;
