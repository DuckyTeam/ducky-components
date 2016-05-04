import 'font-awesome/css/font-awesome.css';
import './material-ui/css/material-design-iconic-font.css';
import "../common/icons.css";
import HeaderCompositUser from '../common/composites/HeaderCompositUser';
import SectionHeaderGeneral from '../common/composites/SectionHeaderGeneral';
import ActionButton from '../common/ActionButton';
import ActionItemSummaryComposit from '../common/ActionItemSummaryComposit';
import Avatar from "../common/Avatar";
import Button from '../common/Button';
import ButtonCounter from '../common/ButtonCounter';
import Popup from '../common/Popup';
import Header from '../common/Header';
import HeaderCompositActivity from '../common/HeaderCompositActivity';
import Icon from '../common/Icon';
import IconAvaWrapper from '../common/IconAvaWrapper';
import IconImage from '../common/IconImage';
import ImageElement from '../common/ImageElement';
import LabelFooterAction from '../common/LabelFooterAction';
import LabelPair from '../common/LabelPair';
import LabelSmall from "../common/LabelSmall";
import LabelStandard from "../common/LabelStandard";
import TabMenuIconButtons from '../common/TabMenuIconButtons';
import LogButton from "../common/LogButton";
import MenuHeader from '../common/MenuHeader';
import MenuItem from '../common/MenuItem';
import MenuWrapper from '../common/MenuWrapper';
import Modal from '../common/Modal';
import PopoverMenu from './../common/PopoverMenu';
import Preview from './Preview';
import React from 'react';
import ScrollContainer from '../common/ScrollContainer';
import SectionFooterClose from './../common/SectionFooterClose';
import ShareMenuItem from '../common/ShareMenuItem';
import Spacer from '../common/Spacer';
import SuggestedHashtags from '../common/SuggestedHashtags';
import TextImageElement from '../common/TextImageElement';
import TextOnlyElement from '../common/TextOnlyElement';
import IconDropdown from '../common/IconDropdown';
import Typography from '../common/Typography';
import TextArea from '../common/TextArea';
import RemoveImage from '../common/RemoveImage';
import Wrapper from '../common/Wrapper';
import IconSVG from '../common/IconSVG';
import styles from './App.css';
const IMAGE_URL = "http://www.amusingtime.com/images/045/" +
"funny-duck-taking-selfie-with-their-friends-picture-for-whatsapp.jpg";
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
            textAreaValue: "",
            tabIndexSelected: 0
        };
        this.handleASICPressed = this.handleASICPressed.bind(this);
        this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
        this.handleModalHide = this.handleModalHide.bind(this);
        this.handleLeftMenuButtonClick = this.handleLeftMenuButtonClick.bind(this);
        this.handleRightMenuButtonClick = this.handleRightMenuButtonClick.bind(this);
        this.handleLeftMenuHide = this.handleLeftMenuHide.bind(this);
        this.handleRightMenuHide = this.handleRightMenuHide.bind(this);
        this.handleTabIndexChanged = this.handleTabIndexChanged.bind(this);
        this.handleTextOnlyElementClick = this.handleTextOnlyElementClick.bind(this);
        this.handleTextImageElementClick = this.handleTextImageElementClick.bind(this);
        this.handleImageElementClick = this.handleImageElementClick.bind(this);
        this.handleImageElementModalHide = this.handleImageElementModalHide.bind(this);
        this.handleOnTextAreaChange = this.handleOnTextAreaChange.bind(this);
    }

    handleTabIndexChanged(key) {
        this.setState({tabIndexSelected: key});
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

    handleClickOne() {
        console.log("item1");
    }

    handleClickTwo() {
        console.log("item2");
    }

    handleFavoriteClicked() {
        console.log('Clicked favorite');
    }

    handleOutlinedFavoriteClicked() {
        console.log('Clicked favorite outlined');
    }

    handleBookmarkClicked() {
        console.log('Clicked bookmark');
    }

    handleMainActionButtonClicked() {
        console.log('Clicked MainActionButton');
    }

    handleIconNanoClick() {
        console.log("IconNano");
    }

    handleIconMicroClick() {
        console.log("IconMicro");
    }

    handleIconMiniClick() {
        console.log("IconMini");
    }

    handleIconSmallClick() {
        console.log("IconSmall");
    }

    handleIconStandardClick() {
        console.log("IconStandard");
    }

    handleIconLargeOneClick() {
        console.log("IconLargeOne");
    }

    handleIconLargeTwoClick() {
        console.log("IconLargeTwo");
    }

    handleIconDisplayOneClick() {
        console.log("IconDisplayOne");
    }

    handleIconDisplayTwoClick() {
        console.log("IconDisplayTwo");
    }

    handleIconDropdownClick() {
        console.log("IconDropdown clicked");
    }

    handleSubmit() {
        console.log('submitted');
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

    /* eslint-enable no-console */

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>{"/common"}</h1>

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
                    <Button
                        onClick={this.handleButtonClick}
                        type="secondary"
                    >
                        {"Secondary button"}
                    </Button>
                    <Button onClick={this.handleButtonClick}>
                        {"Primary button"}
                    </Button>
                </Preview>

                <Preview title="/LabelFooterAction">
                    <LabelFooterAction
                        icon={'icon-favorite'}
                        onClick={this.handleFavoriteClicked}
                    >
                        {8}
                    </LabelFooterAction>

                    <LabelFooterAction
                        icon={'icon-favorite_border'}
                        onClick={this.handleOutlinedFavoriteClicked}
                    />

                    <LabelFooterAction
                        icon={'icon-trophy-outline'}
                        onClick={this.handleBookmarkClicked}
                    >
                        {12}
                    </LabelFooterAction>
                </Preview>

                <Preview
                    title="/TextOnlyElement"
                    width={300}
                >
                    <TextOnlyElement>
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
                        onClick={this.handleIconNanoClick}
                        size={'nano'}
                    />
                    <div className={styles.subHeader}>
                        {"micro (12px)"}
                    </div>
                    <Icon
                        icon={'icon-cow'}
                        onClick={this.handleIconMicroClick}
                        size={'micro'}
                    />
                    <div className={styles.subHeader}>
                        {"mini (16px)"}
                    </div>
                    <Icon
                        icon={'icon-tune'}
                        onClick={this.handleIconMiniClick}
                        size={'mini'}
                    />
                    <div className={styles.subHeader}>
                        {"small (20px)"}
                    </div>
                    <Icon
                        icon={'icon-work'}
                        onClick={this.handleIconSmallClick}
                        size={'small'}
                    />
                    <div className={styles.subHeader}>
                        {"standard (24px)"}
                    </div>
                    <Icon
                        icon={'icon-lens'}
                        onClick={this.handleIconStandardClick}
                        size={'standard'}
                    />
                    <div className={styles.subHeader}>
                        {"large1 (36px)"}
                    </div>
                    <Icon
                        icon={'icon-star'}
                        onClick={this.handleIconLargeOneClick}
                        size={'large1'}
                    />
                    <div className={styles.subHeader}>
                        {"large2 (46px)"}
                    </div>
                    <Icon
                        icon={'icon-fish'}
                        onClick={this.handleIconLargeTwoClick}
                        size={'large2'}
                    />
                    <div className={styles.subHeader}>
                        {"display1 (72px)"}
                    </div>
                    <Icon
                        icon={'icon-pets'}
                        onClick={this.handleIconDisplayOneClick}
                        size={'display1'}
                    />
                    <div className={styles.subHeader}>
                        {"display2 (96px)"}
                    </div>
                    <Icon
                        icon={'icon-duck'}
                        onClick={this.handleIconDisplayTwoClick}
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
                        link={"/"}
                        size={"small"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Standard (36px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        link={"/"}
                        size={"standard"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Large (48px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        link={"/"}
                        size={"large"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display1 (72px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        link={"/"}
                        size={"display1"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display2 (96px)"}
                    </div>
                    <Avatar
                        image={AVATAR_URL}
                        link={"/"}
                        size={"display2"}
                    />
                </Preview>

                <Preview title="/ActionButtons">
                    <div className={styles.subHeader}>
                        {'Action Button Main'}
                    </div>
                    <ActionButton
                        icon={'icon-star'}
                        onClick={this.handleMainActionButtonClicked}
                        size={'main'}
                    />
                    <div className={styles.subHeader}>
                        {'Action Button Standard'}
                    </div>
                    <ActionButton
                        icon={'icon-room'}
                        onClick={this.handleMainActionButtonClicked}
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
                        onClick={this.handleIconDisplayTwoClick}
                        type={"caption2Normal"}
                    />
                    <div className={styles.subHeader}>
                        {"Standard Label"}
                    </div>
                    <LabelStandard
                        content={"425"}
                        icon={'icon-brightness_high'}
                        onClick={this.handleIconDisplayTwoClick}
                    />
                    <div className={styles.subHeader}>
                        {'Label Pair'}
                    </div>
                    <LabelPair
                        co2={'165'}
                        onClick={this.handleIconDisplayTwoClick}
                        points={'12'}
                    />
                    <div className={styles.subHeader}>
                        {'Label Pair - timestamp'}
                    </div>
                    <LabelPair
                        onClick={this.handleIconDisplayTwoClick}
                        points={'12'}
                        time={'2016-02-22 09:30:00'}
                    />
                </Preview>

                <Preview title="/buttonCounters">
                    <div className={styles.subHeader}>
                        {'Small Button Counter'}
                    </div>
                    <ButtonCounter
                        number={'45'}
                        onClick={this.handleIconNanoClick}
                        size={'small'}
                    />
                    <div className={styles.subHeader}>
                        {'Standard Button Counter'}
                    </div>
                    <ButtonCounter
                        number={'1002'}
                        onClick={this.handleIconNanoClick}
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
                        hr={'true'}
                        size={'hr1'}
                    />
                    <div className={styles.subHeader}>
                        {'Horizontal Ruler with Margins'}
                    </div>
                    <Spacer
                        hr={'true'}
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

                <Preview title={"Popover Menu"}>
                    <PopoverMenu onClick={this.handleButtonClick}
                        text={"Hei pa deg!"}
                    />
                </Preview>

                <Preview title="/mainMenu">
                    <div className={styles.subHeader}>
                        {'Menu Header'}
                    </div>
                    <MenuHeader
                        icon1={'icon-home'}
                        icon2={'icon-room'}
                        onClick={this.handleButtonClick}
                    />
                    <div className={styles.subHeader}>
                        {'Menu Item'}
                    </div>
                    <MenuItem
                        icon={'icon-trophy-outline'}
                        name={'Title'}
                        onClick={this.handleIconSmallClick}
                    />
                </Preview>
                <div className={styles.subHeader}>
                    {'MenuWrapper'}
                </div>
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

                <Preview title="/ShareMenu">
                    <ShareMenuItem
                        onClick={this.handleButtonClick}
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

                <Preview
                    title="Action Item Summary Composite"
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

                <Preview title="IconDropdown">
                    <IconDropdown
                        icon="icon-home"
                        onClick={this.handleIconDropdownClick}
                    />
                    <IconDropdown
                        icon="icon-data_usage"
                        onClick={this.handleIconDropdownClick}
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

                <Preview
                    title="Tab Menu 1 - Icon Buttons"
                    width={300}
                >
                    <TabMenuIconButtons
                        icons={["icon-fish", "icon-food-apple", "icon-cow", "icon-carrot"]}
                        selected={2}
                    >
                        <div>
                            <Typography type={"bodyTextStrong"}>{"Tab 3 Header! "}</Typography>
                            <Typography
                                type={"bodyTextNormal"}
                            >
                                {"Hello there! I am the third item on this tab menu. I am groot!"}
                            </Typography>
                        </div>
                    </TabMenuIconButtons>
                </Preview>

                <Preview
                    title="Suggested Hashtags"
                    width={400}
                >
                    <SuggestedHashtags
                        hashtags={[
                            "lolrerewedsdsfdsfsfsdfdsfddsas",
                            "yolo",
                            "lol",
                            "yolo",
                            "lol",
                            "lol",
                            "yolo",
                            "jegharikkeheltskjøntpoengetmedhasfdfsdfdsfdhtags"
                        ]}
                    />
                </Preview>

                <Preview>
                    <IconSVG
                        icon={"Consumption01"}
                        size={"standard"}
                    />
                    <IconSVG
                        icon={"Consumption_03"}
                        size={"large1"}
                    />
                </Preview>

                <Preview>
                    <SectionFooterClose />
                </Preview>

                <h1>{"/Composite Components"}</h1>

                <Preview title={"HeaderComposits"}>
                    <div className={styles.subHeader}>
                        {'HeaderCompositActivity'}
                    </div>
                    <HeaderCompositActivity
                        activityIcon={"icon-brightness_high"}
                        icon={"icon-pig"}
                        iconValue={"10"}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            points={"10"}
                            time={"2016-01-05T01:32:21.196Z"}
                        />
                    </HeaderCompositActivity>
                    <br />
                    <HeaderCompositActivity
                        activityIcon={"icon-brightness_high"}
                        icon={"icon-pig"}
                        iconValue={"10"}
                        title={"Dette er et langt navn"}
                    />
                    <br />
                    <HeaderCompositActivity
                        activityIcon={"icon-brightness_high"}
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
                        icon={"icon-pig"}
                        onIconClick={this.handleButtonClick}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            co2={"10"}
                            points={"8"}
                        />
                    </HeaderCompositUser>
                    <br />
                    <HeaderCompositUser
                        avatar={AVATAR_URL}
                        title={"Dette er et langt navn"}
                    >
                        <LabelPair
                            co2={"10"}
                            points={"8"}
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
                    width={'200'}
                >
                    <SectionHeaderGeneral
                        onClick={this.handleButtonClick}
                        rightIcon={"icon-pig"}
                        title="Right icon"
                    >
                        <LabelPair
                            co2={'10'}
                            points={'8'}
                        />
                    </SectionHeaderGeneral>
                    <br />

                    <SectionHeaderGeneral
                        onClick={this.handleButtonClick}
                        rightIcon={"icon-pig"}
                        title="This is a long text"
                    >
                        <LabelPair
                            co2={'10'}
                            points={'8'}
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

                <h1>{"/mobile"}</h1>
                <h1>{"/pad"}</h1>
                <h1>{"/desktop"}</h1>
            </div>
        );
    }
}
