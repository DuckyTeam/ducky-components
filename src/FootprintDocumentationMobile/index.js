import React from 'react';
import styles from './styles.css';
import Wrapper from '../Wrapper';
import Typography from '../Typography';
import Spacer from '../Spacer';
import SectionHeaderSubsection from '../SectionHeaderSubsection';

function FootprintDocumentationMobile(props) {
  return (
    <div className={styles.outerWrap}>
      <Wrapper
        className={styles.wrapper}
        size="standard"
        >
        <Typography type="caption2Normal">
          {props.readmoreText}
        </Typography>
      </Wrapper>
      <SectionHeaderSubsection
        className={styles.subsectionLink}
        leftIcon={props.leftIcon || 'icon-get_app'}
        onClick={props.onClickPdf}
        title={props.titlePdfDownload}
        />
      <Spacer
        className={styles.spacer}
        size="standard"
        />
    </div>
  );
}

FootprintDocumentationMobile.propTypes = {
  className: React.PropTypes.string,
  leftIcon: React.PropTypes.string,
  onClickPdf: React.PropTypes.func,
  readmoreText: React.PropTypes.string,
  titlePdfDownload: React.PropTypes.string
};

export default FootprintDocumentationMobile;
