import IconAvaWrapper from '../IconAvaWrapper';
import React from 'react';
import Typography from '../Typography';
import Wrapper from '../Wrapper';
import classNames from 'classnames';
import styles from './styles.css';

function SectionHeaderGeneral(props) {
    return (
        <Wrapper
            className={classNames(styles.wrapper, {
                [props.className]: props.className
            })}
            size={"standard"}
        >
            {props.leftIcon
                ? <div className={styles.leftIconWrapper}>
                    <IconAvaWrapper
                        icon={props.leftIcon}
                        onClick={props.onClick}
                        size={"standard"}
                    />
                </div>
              : null
            }

            <div className={styles.contentWrapper}>
                <Typography
                    className={styles.title}
                    type="ingressTitle"
                >
                    {props.title}
                </Typography>
                {props.children ? <div className={styles.children}>{props.children}</div> : null}
            </div>


            {props.rightIcon
                ? <div className={styles.rightIconWrapper}>
                    <IconAvaWrapper
                        icon={props.rightIcon}
                        onClick={props.onClick}
                        size={"standard"}
                    />
                </div>
              : null
            }
        </Wrapper>
    );
}

SectionHeaderGeneral.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    leftIcon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    rightIcon: React.PropTypes.string,
    title: React.PropTypes.string
};

export default SectionHeaderGeneral;
