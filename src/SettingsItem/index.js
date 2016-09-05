import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import ButtonRaised from '../ButtonRaised';
import classNames from 'classnames';
import styles from './styles.css';
const PropTypes = React.PropTypes;

function SettingsItem(props) {
    return (
        <Wrapper
          size={'standard'}
          >
            <Typography
              size={'bodyTextNormal'}
              >
                {'text 1'}
            </Typography>
            {props.expanded
              ?
                <div>
                  <ButtonRaised />
                  <div>
                    {props.children}
                  </div>
                </div>
              :
                <Typography
                  size={'bodyTextStrong'}
                  >
                    {'text 2'}
                </Typography>
              }
          </Wrapper>
    );
}

SettingsItem.propTypes = {
    expanded: PropTypes.bool
};

export default SettingsItem;
