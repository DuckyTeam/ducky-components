import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ButtonRaised from '../ButtonRaised';
import Spacer from '../Spacer';
import IconAvaWrapper from '../IconAvaWrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItem(props) {
  return (
    props.expanded
      ? <div>
        <Wrapper className={classNames(styles.wrapperExpanded, {[props.className]: props.className})}
          onClick={props.onClick}
          size={'standard'}
          >
          <div className={styles.compositeExpanded}>
            <Typography
              className={props.inactive ? styles.typoTitleInactive : styles.typoTitle}
              type={'bodyTextNormal'}
              >
              {props.label}
            </Typography>
            <ButtonRaised
              className={styles.saveButton}
              onClick={styles.onSaveButtonClicked}
              >
              {'LAGRE'}
            </ButtonRaised>
            <IconAvaWrapper
              className={styles.closeButton}
              icon={'icon-close'}
              onClick={props.onCloseClick}
              />
          </div>
        </Wrapper>
        <Wrapper className={styles.expandedContent}
          size={'standard'}
          >
          {props.children}
        </Wrapper>
        <Spacer size={'double'} />
      </div>
      : <Wrapper className={classNames(styles.wrapper, {[props.className]: props.className})}
        onClick={props.onClick}
        size={'standard'}
        >
        <div className={styles.composite}>
          <Typography
            className={props.inactive ? styles.typoTitleInactive : styles.typoTitle}
            type={'bodyTextNormal'}
            >
            {props.label}
          </Typography>
          {props.value
            ? <Typography
              className={props.inactive ? styles.typoContentInactive : styles.typoContent}
              size={'bodyTextStrong'}
              >
              {props.value}
            </Typography>
            : <Typography
              className={props.inactive ? styles.noValueInactive : styles.noValue}
              size={'bodyTextStrong'}
              >
              {'Legg til'}
            </Typography>
        }
        </div>
      </Wrapper>
  );
}

SettingsItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  inactive: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  onCloseClick: PropTypes.func,
  onSaveButtonClicked: PropTypes.func,
  value: PropTypes.string
};

export default SettingsItem;
