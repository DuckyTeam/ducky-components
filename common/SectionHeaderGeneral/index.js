import React from 'react';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import IconAvaWrapper from '../IconAvaWrapper';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
    return (
        <Wrapper size={"standard"} className={styles.wrapper}>
            {
              props.leftIcon ?
                  <div className={styles.leftIconWrapper}>
                      <IconAvaWrapper size={"standard"} icon={props.leftIcon} onClick={props.onClick}></IconAvaWrapper>
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
                      <IconAvaWrapper size={"standard"} icon={props.rightIcon} onClick={props.onClick}></IconAvaWrapper>
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
  leftIcon: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default SectionHeaderGeneral;
