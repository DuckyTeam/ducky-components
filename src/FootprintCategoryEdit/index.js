import React from 'react';
import IconAvaWrapper from '../IconAvaWrapper';
import Spacer from '../Spacer';
import LabelNumberDisplay from '../LabelNumberDisplay';
import styles from './styles.css';

function FootprintCategoryEdit(props) {
  return (
    <div className={styles.outerWrap}>
      <Spacer
        className={styles.topSpacer}
        size="standard"
        />
      <div className={styles.innerWrap}>
        <div className={styles.forcing}>
          <LabelNumberDisplay
            icon={props.icon || 'icon-gnome'}
            label={props.footprintLabel}
            value={props.footprintValue}
            />
        </div>
        <IconAvaWrapper
          icon={props.avaIcon || 'icon-mode_edit'}
          />
      </div>
      <Spacer
        className={styles.bottomSpacer}
        size="standard"
        />
    </div>
  );
}

FootprintCategoryEdit.propTypes = {
  avaIcon: React.PropTypes.string,
  footprintLabel: React.PropTypes.string,
  footprintValue: React.PropTypes.number,
  icon: React.PropTypes.string
};

export default FootprintCategoryEdit;
