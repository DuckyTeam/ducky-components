import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ButtonRaised from '../ButtonRaised';
import Spacer from '../Spacer';
import IconAvaWrapper from '../composites/IconAvaWrapper';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

class SettingsItem extends React.Component {
  renderExpandedSettings() {
    return (
      <div>
        <div className={styles.submit}>
          <ButtonRaised />
          <IconAvaWrapper
            icon={'icon-close'}
            onClick={this.props.closeClick}
          />
        </div>
        <div>
          {this.props.children}
        </div>
        <Spacer size={'double'} />
      </div>
    )
  }

  render() {
    return (
      <Wrapper
        className={classNames(styles.wrapper, {
            [this.props.className]: this.props.className
        })}
        onClick={this.props.onClick}
        size={'standard'}
        >
          <Typography
            className={styles.label}
            size={'bodyTextNormal'}
            >
              {this.props.label}
          </Typography>
          {this.props.expanded
            ?
              this.renderExpandedSettings()
            :
              this.props.value
              ?
              <Typography
                className={styles.value}
                size={'bodyTextStrong'}
                >
                  {this.props.value}
              </Typography>
              :
              <Typography
                className={styles.noValue}
                size={'bodyTextStrong'}
                >
                  {'Legg til'}
              </Typography>
            }
      </Wrapper>
    );
  }
}

SettingsItem.propTypes = {
    className: PropTypes.string,
    closeClick: PropTypes.func,
    label: PropTypes.string,
    expanded: PropTypes.bool,
    onClick: PropTypes.func,
    value: PropTypes.value
};

export default SettingsItem;
