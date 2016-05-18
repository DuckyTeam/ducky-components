import 'font-awesome/css/font-awesome.css';
import './material-ui/css/material-design-iconic-font.css';
import "../common/icons.css";
import HeaderCompositUser from '../common/composites/HeaderCompositUser';
import SectionHeaderGeneral from '../common/composites/SectionHeaderGeneral';
import SectionHeaderTitle from '../common/composites/SectionHeaderTitle';
import ActionItemSummaryComposit from '../common/composites/ActionItemSummaryComposit';
import IconAvaWrapper from '../common/composites/IconAvaWrapper';
import LabelPair from '../common/composites/LabelPair';
import ActionButton from '../common/ActionButton';
import Avatar from "../common/Avatar";
import Button from '../common/Button';
import ButtonRaised from '../common/ButtonRaised';
import ButtonCounter from '../common/ButtonCounter';
import Popup from '../common/Popup';
import Header from '../common/Header';
import HeaderCompositActivity from '../common/HeaderCompositActivity';
import Icon from '../common/Icon';
import IconImage from '../common/IconImage';
import ImageElement from '../common/ImageElement';
import LabelSmall from "../common/LabelSmall";
import LabelStandard from "../common/LabelStandard";
import LabelNumber from "../common/LabelNumber";
import LabelLarge from "../common/LabelLarge";
import ListCompositeSavings from '../common/composites/ListCompositeSavings';
import LogButton from "../common/LogButton";
import MenuWrapper from '../common/MenuWrapper';
import Modal from '../common/Modal';
import PopoverMenu from './../common/PopoverMenu';
import Preview from './Preview';
import RadioButton from '../common/RadioButton';
import React from 'react';
import ScrollContainer from '../common/ScrollContainer';
import SectionFooterClose from './../common/SectionFooterClose';
import Spacer from '../common/Spacer';
import TextImageElement from '../common/TextImageElement';
import TextOnlyElement from '../common/TextOnlyElement';
import IconDropdown from '../common/IconDropdown';
import Typography from '../common/Typography';
import TextArea from '../common/TextArea';
import RemoveImage from '../common/RemoveImage';
import Wrapper from '../common/Wrapper';
import IconSVG from '../common/IconSVG';
import ProgressBar from '../common/ProgressBar';
import styles from './App.css';
const IMAGE_URL = "http://rocketpost.com/media/458905753-e1404928920315.jpg";
const AVATAR_URL = "http://www.glitters20.com/wp-content/uploads/2012/11/Funny-Duck-41.jpg";

export default class App extends React.Component {

    /*
     WARNING: NEVER DO THIS, IT HAS NO VALID USE CASE!
     IT IS ONLY USED FOR DEMONSTRATION, setState IS VERBOTEN!
    */
    /* eslint-disable react/no-set-state, no-console, max-statements */

    constructor(props) {
        super(props);
        this.state = {
            ASICExpanded: false,
            showModal: false,
            showImageModal: false,
            showFullImageText: false,
            showFullText: false,
            showMenu: false,
            textAreaValue: ""
        };
        this.handleASICPressed = this.handleASICPressed.bind(this);
        this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
        this.handleModalHide = this.handleModalHide.bind(this);
        this.handleLeftMenuButtonClick = this.handleLeftMenuButtonClick.bind(this);
        this.handleRightMenuButtonClick = this.handleRightMenuButtonClick.bind(this);
        this.handleLeftMenuHide = this.handleLeftMenuHide.bind(this);
        this.handleRightMenuHide = this.handleRightMenuHide.bind(this);
        this.handleTextOnlyElementClick = this.handleTextOnlyElementClick.bind(this);
        this.handleTextImageElementClick = this.handleTextImageElementClick.bind(this);
        this.handleImageElementClick = this.handleImageElementClick.bind(this);
        this.handleImageElementModalHide = this.handleImageElementModalHide.bind(this);
        this.handleOnTextAreaChange = this.handleOnTextAreaChange.bind(this);
    }

    handleModalButtonClick() {
        this.setState({showModal: true});
    }

    handleModalHide() {
        this.setState({showModal: false});
    }

    handleLeftMenuButtonClick() {
        this.setState({showLeftMenu: true});
    }

    handleRightMenuButtonClick() {
        this.setState({showRightMenu: true});
    }

    handleLeftMenuHide() {
        this.setState({showLeftMenu: false});
    }

    handleRightMenuHide() {
        this.setState({showRightMenu: false});
    }

    handleTextOnlyElementClick() {
        this.setState({showFullText: !this.state.showFullText});
    }

    handleTextImageElementClick() {
        this.setState({showFullImageText: !this.state.showFullImageText});
    }

    handleImageElementClick() {
        this.setState({showImageModal: true});
    }

    handleImageElementModalHide() {
        this.setState({showImageModal: false});
    }

    handleOnTextAreaChange(event) {
        this.setState({textAreaValue: event.target.value});
    }
    handleASICPressed() {
        console.log("Preddes");
        this.setState({ASICExpanded: !this.state.ASICExpanded});
    }

    /* eslint-enable react/no-set-state */

    handleButtonClick() {
        console.log('Clicked button');
    }

    handleOnTextAreaSubmit() {
        console.log('TextArea submitted');
    }

    handleRemoveImageClick() {
        console.log('RemoveImage button clicked');
    }

    handleOnFileSelected(event) {
        console.log('selected file', event.target.files);
    }

    handleOnAvatarClicked() {
        console.log('avatar clicked');
    }

    handleRadioButtonClick() {
        console.log('Clicked radio button');
    }

    /* eslint-enable no-console */

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>{"/common"}</h1>

                <Preview title={"Menu Wrapper"}>
                    <button onClick={this.handleLeftMenuButtonClick}>
                        {'Show Left Menu'}
                    </button>
                    <MenuWrapper
                        alignment={'left'}
                        onHide={this.handleLeftMenuHide}
                        show={this.state.showLeftMenu}
                    >
                        <b>{'MenuContent'}</b>
                    </MenuWrapper>
                    <button onClick={this.handleRightMenuButtonClick}>
                        {'Show Right Menu'}
                    </button>
                    <MenuWrapper
                        alignment={'right'}
                        onHide={this.handleRightMenuHide}
                        show={this.state.showRightMenu}
                    >
                        <b>{'MenuContent'}</b>
                    </MenuWrapper>
                </Preview>

                <Preview
                    title="/Popup"
                    width={200}
                >
                    <Popup>{'hey'}</Popup>
                </Preview>

                <Preview
                    title="/Modal"
                    width={200}
                >
                    <button onClick={this.handleModalButtonClick}>
                        {"Show modal"}
                    </button>
                    <Modal
                        onHide={this.handleModalHide}
                        show={this.state.showModal}
                    >
                        {"Modal content"}
                    </Modal>
                </Preview>

                <Preview
                    title="/IconImage"
                    width={200}
                >
                    <IconImage />
                </Preview>

                <Preview
                    title="/Header"
                    width={300}
                >
                    <Header
                        subTitle="Favoritter (0)"
                        title="Logg aktiviteter"
                    />
                </Preview>

                <Preview title="/Button">
                    {'DarkTheme'}
                    <div style={{backgroundColor: '#aeacaa', padding: 10}}>
                        <Button
                            disabled
                            onClick={this.handleButtonClick}
                            theme={'dark'}
                        >
                            {"Flat button disabled"}
                        </Button>
                        <Button
                            onClick={this.handleButtonClick}
                            theme={'dark'}
                        >
                            {"Flat button"}
                        </Button>
                    </div>
                    <br />{'LightTheme'}
                    <div style={{backgroundColor: '#e3d9cd', padding: 10}}>
                        <Button
                            disabled
                            onClick={this.handleButtonClick}
                        >
                            {"Flat button disabled"}
                        </Button>
                        <Button
                            onClick={this.handleButtonClick}
                        >
                            {"Flat button"}
                        </Button>
                    </div>
                    <br />
                    {'DarkTheme'}
                    <div style={{backgroundColor: '#aeacaa', padding: 10}}>
                        <ButtonRaised
                            disabled
                            onClick={this.handleButtonClick}
                            theme={'dark'}
                        >
                            {"Raised button disabled"}
                        </ButtonRaised>
                        <ButtonRaised
                            onClick={this.handleButtonClick}
                            theme={'dark'}
                        >
                            {"Raised button"}
                        </ButtonRaised>
                    </div>
                    <br />
                    {'LightTheme'}
                    <div style={{backgroundColor: '#e3d9cd', padding: 10}}>
                        <ButtonRaised
                            disabled
                            onClick={this.handleButtonClick}
                            type={'raised'}
                        >
                            {"Raised button disabled"}
                        </ButtonRaised>
                        <ButtonRaised
                            onClick={this.handleButtonClick}
                            type={'raised'}
                        >
                            {"Raised button"}
                        </ButtonRaised>
                    </div>
                </Preview>

                <Preview title="/RadioButton">
                    {'RadioButton active'}
                    <RadioButton
                        checked
                        onClick={this.handleRadioButtonClick}
                    />
                    {'RadioButton default'}
                    <RadioButton
                        onClick={this.handleRadioButtonClick}
                    />
                </Preview>


                <Preview
                    title="/TextOnlyElement"
                    width={300}
                >
                    <TextOnlyElement
                        category={'transport'}
                    >
                        {[
                            "Dette er en kjempe fin tekst." +
                            " Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så\n",
                            "denne.Dette er en kjempe fin tekst.\n",
                            "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne. "
                        ].join("")}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {"#google"}
                        </a>
                    </TextOnlyElement>
                    <br />
                    <TextOnlyElement
                        category={'social'}
                        onClick={this.handleTextOnlyElementClick}
                        showFullText={this.state.showFullText}
                    >
                        {["Dette er en kjempe fin tekst." +
                            " Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.\n",
                            "Dette er en kjempe fin tekst."].join("")}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                        {[
                            " Jeg trodde ikke tekst kunne bli\n",
                            "vakkert, helt til jeg så denne.\n",
                            "Dette er en kjempe fin tekst. " +
                            "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne.\n",
                            "Dette er en kjempe fin tekst.\n",
                            "Jeg trodde ikke tekst kunne bli vakkert, " +
                            "helt til jeg så denne. Dette er en kjempe fin tekst.\n",
                            "Jeg trodde ikke tekst kunne bli vakkert, " +
                            "helt til jeg så denne. Dette er en kjempe fin tekst.\n",
                            "Jeg trodde ikke tekst kunne bli vakkert, " +
                            "helt til jeg så denne. Dette er en kjempe fin tekst.\n"
                        ].join("")}
                    </TextOnlyElement>
                </Preview>

                <Preview
                    title="/TextImageElement"
                    width={300}
                >
                    <TextImageElement>
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                    </TextImageElement>
                    <br />
                    <TextImageElement
                        onClick={this.handleTextImageElementClick}
                        showFullText={this.state.showFullImageText}
                    >
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                        {"Dette er en kjempe fin tekst. " +
                        "Jeg trodde ikke tekst kunne bli vakkert, helt til jeg så denne."}
                        <a
                            href="http://www.google.com"
                            target="_blank"
                        >
                            {" #google"}
                        </a>
                    </TextImageElement>
                </Preview>

                <Preview
                    height={300}
                    title="/ImageElement"
                    width={300}
                >
                    <ImageElement
                        onClick={this.handleImageElementClick}
                        onModalHide={this.handleImageElementModalHide}
                        showModal={this.state.showImageModal}
                        url={"http://funnyasduck.net/wp-content/uploads/2013/01/" +
                        "funny-big-massive-rubber-duck-river-water-quack-motherducker-pics.jpg"}
                    />
                </Preview>

                <Preview title="/icons">
                    <div className={styles.subHeader}>
                        {"nano (10px)"}
                    </div>
                    <Icon
                        icon={'icon-pig'}
                        onClick={this.handleButtonClick}
                        size={'nano'}
                    />
                    <div className={styles.subHeader}>
                        {"micro (12px)"}
                    </div>
                    <Icon
                        icon={'icon-cow'}
                        onClick={this.handleButtonClick}
                        size={'micro'}
                    />
                    <div className={styles.subHeader}>
                        {"mini (16px)"}
                    </div>
                    <Icon
                        icon={'icon-tune'}
                        onClick={this.handleButtonClick}
                        size={'mini'}
                    />
                    <div className={styles.subHeader}>
                        {"small (20px)"}
                    </div>
                    <Icon
                        icon={'icon-work'}
                        onClick={this.handleButtonClick}
                        size={'small'}
                    />
                    <div className={styles.subHeader}>
                        {"standard (24px)"}
                    </div>
                    <Icon
                        icon={'icon-lens'}
                        onClick={this.handleButtonClick}
                        size={'standard'}
                    />
                    <div className={styles.subHeader}>
                        {"large1 (36px)"}
                    </div>
                    <Icon
                        icon={'icon-star'}
                        onClick={this.handleButtonClick}
                        size={'large1'}
                    />
                    <div className={styles.subHeader}>
                        {"large2 (46px)"}
                    </div>
                    <Icon
                        icon={'icon-fish'}
                        onClick={this.handleButtonClick}
                        size={'large2'}
                    />
                    <div className={styles.subHeader}>
                        {"display1 (72px)"}
                    </div>
                    <Icon
                        icon={'icon-pets'}
                        onClick={this.handleButtonClick}
                        size={'display1'}
                    />
                    <div className={styles.subHeader}>
                        {"display2 (96px)"}
                    </div>
                    <Icon
                        icon={'icon-duck'}
                        onClick={this.handleButtonClick}
                        size={'display2'}
                    />
                </Preview>

                <Preview title="Typography">
                    {"Types:"}
                    <br />
                    <Typography type={'caption1Normal'}>{"caption1Normal (10px)"}</Typography>
                    <br />
                    <Typography type={'caption1Strong'}>{"caption1Strong (10px)"}</Typography>
                    <br />
                    <Typography type={'caption2Normal'}>{"caption2Normal (12px)"}</Typography>
                    <br />
                    <Typography type={'caption2Strong'}>{"caption2Strong (12px)"}</Typography>
                    <br />
                    <Typography type={'bodyTextNormal'}>{"bodyTextNormal (14px)"}</Typography>
                    <br />
                    <Typography type={'bodyTextStrong'}>{"bodyTextStrong (14px)"}</Typography>
                    <br />
                    <Typography type={'bodyTextTitle'}>{"bodyTextTitle (14px)"}</Typography>
                    <br />
                    <Typography type={'ingressNormal'}>{"ingressNormal (18px)"}</Typography>
                    <br />
                    <Typography type={'ingressStrong'}>{"ingressStrong (18px)"}</Typography>
                    <br />
                    <Typography type={'ingressTitle'}>{"ingressTitle (18px)"}</Typography>
                    <br />
                    <Typography type={'header1'}>{"header1 (24px)"}</Typography>
                    <br />
                    <Typography type={'display1'}>{"display1 (32px)"}</Typography>
                    <br />
                    <Typography type={'display2'}>{"display2 (48px)"}</Typography>
                    <br />
                    <Typography type={'display3'}>{"display3 (56px)"}</Typography>
                </Preview>

                <Preview title="/avatars">
                    <div className={styles.subHeader}>
                        {"Avatar Small (24px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        onClick={this.handleOnAvatarClicked}
                        size={"small"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Standard (36px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        onClick={this.handleOnAvatarClicked}
                        size={"standard"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Large (48px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        onClick={this.handleOnAvatarClicked}
                        size={"large"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display1 (72px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        onClick={this.handleOnAvatarClicked}
                        size={"display1"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display2 (96px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        onClick={this.handleOnAvatarClicked}
                        size={"display2"}
                    />
                </Preview>

                <Preview title="/ActionButtons">
                    <div className={styles.subHeader}>
                        {'Action Button Main'}
                    </div>
                    <ActionButton
                        icon={'icon-star'}
                        onClick={this.handleButtonClick}
                        size={'main'}
                    />
                    <div className={styles.subHeader}>
                        {'Action Button Standard'}
                    </div>
                    <ActionButton
                        icon={'icon-room'}
                        onClick={this.handleButtonClick}
                        size={'standard'}
                    />
                </Preview>

                <Preview title="/labels">
                    <div className={styles.subHeader}>
                        {"Small Label"}
                    </div>
                    <LabelSmall
                        content={"45"}
                        icon={'icon-tram'}
                        onClick={this.handleButtonClick}
                        type={"caption2Normal"}
                    />
                    <div className={styles.subHeader}>
                        {"Standard Label"}
                    </div>
                    <LabelStandard
                        content={"425"}
                        icon={'icon-brightness_high'}
                        onClick={this.handleButtonClick}
                    />
                    <div className={styles.subHeader}>
                        {"Large Label"}
                    </div>
                    <LabelLarge
                        content={"9999"}
                        icon={'icon-brightness_high'}
                        onClick={this.handleButtonClick}
                    />
                    <div className={styles.subHeader}>
                        {"Label Number darkbg"}
                    </div>
                    <div style={{backgroundColor: '#1e4a54', width: 70}}>
                        <LabelNumber
                            bgcolor={"darkbg"}
                            number={"45,677"}
                            textcontent={"deltagere"}
                        />
                    </div>
                    <br />
                    <div className={styles.subHeader}>
                        {"Label Number lightbg"}
                    </div>
                    <div style={{backgroundColor: '#d8e3e2', width: 70}}>
                        <LabelNumber
                            number={"45,677"}
                            textcontent={"deltagere"}
                        />
                    </div>
                </Preview>

                <Preview title="/buttonCounters">
                    <div className={styles.subHeader}>
                        {'Small Button Counter'}
                    </div>
                    <ButtonCounter
                        number={45}
                        onClick={this.handleButtonClick}
                        size={'small'}
                    />
                    <div className={styles.subHeader}>
                        {'Standard Button Counter'}
                    </div>
                    <ButtonCounter
                        number={1002}
                        onClick={this.handleButtonClick}
                        size={'standard'}
                    />
                </Preview>

                <Preview title="/spacer">
                    <div className={styles.subHeader}>
                        {'Standard Spacer'}
                    </div>
                    <Spacer
                        size={'standard'}
                    />
                    <div className={styles.subHeader}>
                        {'Double Spacer'}
                    </div>
                    <Spacer
                        size={'double'}
                    />
                    <div className={styles.subHeader}>
                        {'Horizontal Ruler'}
                    </div>
                    <Spacer
                        hr={Boolean(true)}
                        size={'hr1'}
                    />
                    <div className={styles.subHeader}>
                        {'Horizontal Ruler with Margins'}
                    </div>
                    <Spacer
                        hr={Boolean(true)}
                        size={'hr2'}
                    />
                </Preview>

                <Preview title="/wrapper">
                    <div className={styles.subHeader}>
                        {'Standard Wrapper'}
                    </div>
                    <Wrapper
                        size={'standard'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                    <div className={styles.subHeader}>
                        {'Side/Bottom Wrapper'}
                    </div>
                    <Wrapper
                        size={'side-bottom'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                    <div className={styles.subHeader}>
                        {'Side Wrapper'}
                    </div>
                    <Wrapper
                        size={'side'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                    <div className={styles.subHeader}>
                        {'Narrow Wrapper'}
                    </div>
                    <Wrapper
                        size={'narrow'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                    <div className={styles.subHeader}>
                        {'Slim Wrapper'}
                    </div>
                    <Wrapper
                        size={'slim'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                    <div className={styles.subHeader}>
                        {'Short Wrapper'}
                    </div>
                    <Wrapper
                        size={'short'}
                    >
                        <img src={'http://placehold.it/100x50'} />
                    </Wrapper>
                </Preview>

                <Preview title={"Popover Menu"}>
                    <PopoverMenu onClick={this.handleButtonClick}
                        text={"Hei pa deg!"}
                    />
                </Preview>

                <Preview
                    title="ScrollContainer"
                    width={300}
                >
                    <ScrollContainer size={200}>
                        <div style={{backgroundColor: 'red', height: 300}}></div>
                        <div style={{backgroundColor: 'blue', height: 300}}></div>
                    </ScrollContainer>
                </Preview>

                <Preview
                    title="LogButton"
                    width={50}
                >
                    <LogButton />
                    <LogButton checked />
                </Preview>

                <Preview title="IconDropdown">
                    <IconDropdown
                        icon="icon-home"
                        onClick={this.handleButtonClick}
                    />
                    <IconDropdown
                        icon="icon-data_usage"
                        onClick={this.handleButtonClick}
                    />
                </Preview>

                <Preview title="TextArea">
                    <TextArea
                        onChange={this.handleOnTextAreaChange}
                        onSubmit={this.handleOnTextAreaSubmit}
                        placeholder={"Write something..."}
                        value={this.state.textAreaValue}
                    />
                </Preview>

                <Preview
                    title="RemoveImage"
                    width={300}
                >
                    <RemoveImage
                        image={IMAGE_URL}
                        onClick={this.handleRemoveImageClick}
                    />
                </Preview>

                <Preview title={"IconSVG"}>
                    <div className={styles.subHeader}>Small</div>
                    <IconSVG
                        icon={"Consumption01"}
                        size={"small"}
                    />
                    <div className={styles.subHeader}>Standard</div>
                    <IconSVG
                        icon={"Consumption01"}
                        size={"standard"}
                    />
                    <div className={styles.subHeader}>large</div>
                    <IconSVG
                        icon={"Consumption03"}
                        size={"large"}
                    />
                    <div className={styles.subHeader}>display1</div>
                    <IconSVG
                        icon={"Consumption03"}
                        size={"display1"}
                    />
                    <div className={styles.subHeader}>display2</div>
                    <IconSVG
                        icon={"Consumption03"}
                        size={"display2"}
                    />
                </Preview>

                <Preview title="SectionFooterClose">
                    <SectionFooterClose />
                </Preview>

                <h1>{"/Composite Components"}</h1>

                <Preview title={"HeaderComposits"}>
                    <div className={styles.subHeader}>
                        {'HeaderCompositActivity'}
                    </div>
                    <HeaderCompositActivity
                        activityIcon={"Consumption01"}
                        icon={"icon-pig"}
                        iconValue={"10"}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            points={10}
                            time={1463044694799}
                        />
                    </HeaderCompositActivity>
                    <br />
                    <HeaderCompositActivity
                        activityIcon={"Consumption01"}
                        icon={"icon-pig"}
                        iconValue={"10"}
                        title={"Dette er et langt navn"}
                    />
                    <br />
                    <HeaderCompositActivity
                        activityIcon={"Consumption01"}
                        title={"Dette er et langt navn"}
                    >
                        {"Whatever you want"}
                    </HeaderCompositActivity>
                    <br />
                    <div className={styles.subHeader}>
                        {'HeaderCompositUser'}
                    </div>
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        category={'social'}
                        icon={"icon-pig"}
                        onIconClick={this.handleButtonClick}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </HeaderCompositUser>
                    <br />
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </HeaderCompositUser>
                    <br />
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </HeaderCompositUser>
                    <br />
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        title={"Dette er et langt navn"}
                    >
                        {"Whatever you want"}
                    </HeaderCompositUser>
                    <br />
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        title={"Dette er et langt navn"}
                    />
                </Preview>

                <Preview title={"SectionHeaderGeneral"}
                    width={200}
                >
                    <SectionHeaderGeneral
                        onClick={this.handleButtonClick}
                        rightIcon={"icon-pig"}
                        title="Right icon"
                    >
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </SectionHeaderGeneral>
                    <br />

                    <SectionHeaderGeneral
                        onClick={this.handleButtonClick}
                        rightIcon={"icon-pig"}
                        title="This is a long text"
                    >
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </SectionHeaderGeneral>
                    <br />

                    <SectionHeaderGeneral title="Only text" />
                    <br />

                    <SectionHeaderGeneral
                        leftIcon={"icon-pig"}
                        onClick={this.handleButtonClick}
                        title="Icon on left"
                    />
                </Preview>

                <Preview title={"SectionHeaderTitle"}
                    width={200}
                >
                    <SectionHeaderTitle title="Some title" />
                    <SectionHeaderTitle title="Title">
                        <LabelPair
                            co2={10}
                            points={8}
                        />
                    </SectionHeaderTitle>
                    <SectionHeaderTitle title="Some title">
                        <span style={{fontSize: 10}}>Whatever you want</span>
                    </SectionHeaderTitle>
                </Preview>

                <Preview
                    title="ActionItemSummaryComposite"
                    width={100}
                >
                    <ActionItemSummaryComposit
                        expanded={this.state.ASICExpanded}
                        icons={["Consumption01", "Energy01", "Transport02", "Energy02",
                            "Energy01", "Transport02", "Energy02", "Energy01", "Transport02",
                            "Energy02", "Energy01", "Transport02", "Energy02"
                        ]}
                        onClick={this.handleASICPressed}
                    />
                    <ActionItemSummaryComposit
                        icons={["Consumption01", "Energy02", "Energy01",
                            "Transport02", "Energy02", "Energy01", "Transport02", "Energy02"
                        ]}
                    />
                </Preview>

                <Preview title="/ListCompositeSavings">
                    <div className={styles.subHeader}>
                      {'Duckypoint Savings'}
                    </div>
                    <div style={{backgroundColor: 'lightgrey'}}>
                        <ListCompositeSavings
                            savings={5}
                            type={'points'}
                        />
                    </div>
                    <br />
                    <div className={styles.subHeader}>
                        {'CO2 Savings'}
                    </div>
                    <div style={{backgroundColor: 'lightgrey'}}>
                        <ListCompositeSavings
                            savings={2.7}
                        />
                    </div>
                </Preview>

                <Preview title="/labels">
                    <div className={styles.subHeader}>
                        {'Label Pair'}
                    </div>
                    <LabelPair
                        co2={165}
                        onClick={this.handleButtonClick}
                        points={12}
                    />
                    <div className={styles.subHeader}>
                        {'Label Pair - timestamp'}
                    </div>
                    <LabelPair
                        onClick={this.handleButtonClick}
                        points={12}
                        time={1463044694799}
                    />
                </Preview>

                <Preview title="/Icon avatar with wrapper">
                    <div className={styles.subHeader}>
                        {'Wrapped Icon'}
                    </div>
                    <IconAvaWrapper
                        icon={'icon-tram'}
                        onClick={this.handleButtonClick}
                    />
                    <div className={styles.subHeader}>
                        {'Wrapped Avatar'}
                    </div>
                    <IconAvaWrapper
                        avatar={AVATAR_URL}
                        onClick={this.handleButtonClick}
                    />
                </Preview>

                <Preview title="ProgressBar">
                    <ProgressBar percent={70} />
                    <br />
                    <ProgressBar
                        color="#8BC34A"
                        percent={30}
                    />
                </Preview>

                <h1>{"/mobile"}</h1>
                <h1>{"/pad"}</h1>
                <h1>{"/desktop"}</h1>
            </div>
        );
    }
}
