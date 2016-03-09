import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Icon from '../Icon';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
    return (
        <Wrapper size={"standard"} className={styles.wrapper}>
            {
              props.leftIcon ?
                  <div className={styles.leftIconWrapper}>
                      <Icon size={"standard"} icon={props.leftIcon}></Icon>
                  </div>
              :
                  null
            }

            <div className={styles.contentWrapper}>
                <Typography type="ingressTitle" className={styles.title}>{props.title}</Typography>
                {props.children ? <div className={styles.children}>{props.children}</div> : null}
            </div>


            {
              props.rightIcon ?
                  <div className={styles.rightIconWrapper}>
                      <Icon size={"standard"} icon={props.rightIcon}></Icon>
                  </div>
              :
                  null
            }
        </Wrapper>
    );
}

SectionHeaderGeneral.propTypes = {
  title: React.PropTypes.string,
  children: React.PropTypes.any,
  rightIcon: React.PropTypes.string,
  leftIcon: React.PropTypes.string
}

export default SectionHeaderGeneral;
