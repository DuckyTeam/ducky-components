
import Icon from '../Icon';
import IconImage from '../IconImage';
import React from 'react';
import Typography from '../Typography';
import LabelStandard from '../LabelStandard';
import classNames from 'classnames';
import styles from './styles.css';

function HeaderCompositActivity(props) {
    return (
        <div className={classNames(styles.wrapper, {[props.className]: props.className})}>
            {props.activityIcon
              ? <IconImage
                icon={props.activityIcon}
                size={"standard"}
                />
              : <Icon
                icon={props.leftIcon}
                size="large1"
                />
            }
            <div className={styles.content}>
                <Typography
                    className={styles.title}
                    type="bodyTextTitle"
                >
                    {props.title}
                </Typography>
                <div className={styles.labelWrapper}>
                    {props.children}
                </div>
            </div>
            {
                props.iconValue
                ? <LabelStandard
                    content={props.iconValue}
                    icon={props.icon}
                  />
                : <Icon
                    icon={classNames(props.icon, {
                        [styles.iconWithCursor]: Boolean(props.onIconClick)
                    })}
                    onClick={props.onIconClick}
                    size="standard"
                  />
            }
        </div>
    );
}

HeaderCompositActivity.propTypes = {
  activityIcon: React.PropTypes.string,
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  iconValue: React.PropTypes.string,
  leftIcon: React.PropTypes.string,
  onIconClick: React.PropTypes.func,
  title: React.PropTypes.string
};

export default HeaderCompositActivity;
