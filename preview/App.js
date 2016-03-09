import 'font-awesome/css/font-awesome.css';
import './material-ui/css/material-design-iconic-font.css';
import "../common/icons.css";
import ActionButton from '../common/ActionButton';
import Avatar from "../common/Avatar";
import Button from '../common/Button';
import ButtonCounter from '../common/ButtonCounter';
import Dropdown from '../common/Dropdown';
import DropdownItem from '../common/Dropdown/Item';
import Header from '../common/Header';
import Icon from '../common/Icon';
import IconAvaWrapper from '../common/IconAvaWrapper';
import IconImage from '../common/IconImage';
import ImageElement from '../common/ImageElement';
import LabelFooterAction from '../common/LabelFooterAction';
import LabelPair from '../common/LabelPair';
import LabelSmall from "../common/LabelSmall";
import LabelStandard from "../common/LabelStandard";
import MaMeF10 from "../common/MaMeF10";
import Modal from '../common/Modal';
import Preview from './Preview';
import React from 'react';
import Spacer from '../common/Spacer';
import TextImageElement from '../common/TextImageElement';
import TextOnlyElement from '../common/TextOnlyElement';
import TopNavigationBar from '../common/TopNavigationBar';
import Typography from '../common/Typography';
import Wrapper from '../common/Wrapper';
import styles from './App.css';
const PREVIEW_WIDTH = 200;
const HEADER_PREVIEW_WIDTH = 300;
const TOP_NAVIGATION_PREVIEW_WIDTH = 900;
const LABEL_ONE = 8;
const LABEL_TWO = 12;

export default class App extends React.Component {

    /*
     WARNING: NEVER DO THIS, IT HAS NO VALID USE CASE!
     IT IS ONLY USED FOR DEMONSTRATION, setState IS VERBOTEN!
    */
    /* eslint-disable react/no-set-state, no-console */

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showImageModal: false,
            showFullImageText: false,
            showFullText: false
        };
        this.handleModalButtonClick = this.handleModalButtonClick.bind(this);
        this.handleModalHide = this.handleModalHide.bind(this);
        this.handleTextOnlyElementClick = this.handleTextOnlyElementClick.bind(this);
        this.handleTextImageElementClick = this.handleTextImageElementClick.bind(this);
        this.handleImageElementClick = this.handleImageElementClick.bind(this);
        this.handleImageElementModalHide = this.handleImageElementModalHide.bind(this);
    }

    handleModalButtonClick() {
        this.setState({showModal: true});
    }

    handleModalHide() {
        this.setState({showModal: false});
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

    /* eslint-enable no-console */

    render() {
        return (
            <div className={styles.wrapper}>
                <h1>{"/common"}</h1>

                <Preview
                    title="/Dropdown"
                    width={PREVIEW_WIDTH}
                >
                    <Dropdown label={<span>{"Some label"}</span>}>
                        <DropdownItem onClick={this.handleClickOne}>
                            {"Item 1"}
                        </DropdownItem>
                        <DropdownItem onClick={this.handleClickTwo}>
                            {"Item 2"}
                        </DropdownItem>
                    </Dropdown>
                    <br />
                    <Dropdown
                        label={<span>{"Some label"}</span>}
                        right
                    >
                        <DropdownItem>{"Item 1"}</DropdownItem>
                        <DropdownItem>{"Item 2"}</DropdownItem>
                    </Dropdown>
                </Preview>

                <Preview
                    title="/Modal"
                    width={PREVIEW_WIDTH}
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
                    width={PREVIEW_WIDTH}
                >
                    <IconImage />
                </Preview>

                <Preview
                    title="/Header"
                    width={HEADER_PREVIEW_WIDTH}
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

                <Preview
                    title={"TopNavigationBar"}
                    width={TOP_NAVIGATION_PREVIEW_WIDTH}
                >
                    <TopNavigationBar
                        notifications={0}
                        title={'Title'}
                    />
                </Preview>

                <Preview title="/LabelFooterAction">
                    <LabelFooterAction
                        icon={'icon-favorite'}
                        onClick={this.handleFavoriteClicked}
                    >
                        {LABEL_ONE}
                    </LabelFooterAction>

                    <LabelFooterAction
                        icon={'icon-favorite_border'}
                        onClick={this.handleOutlinedFavoriteClicked}
                    />

                    <LabelFooterAction
                        icon={'icon-trophy-outline'}
                        onClick={this.handleBookmarkClicked}
                    >
                        {LABEL_TWO}
                    </LabelFooterAction>
                </Preview>

                <Preview
                    title="/TextOnlyElement"
                    width={HEADER_PREVIEW_WIDTH}
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
                    width={HEADER_PREVIEW_WIDTH}
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
                    height={HEADER_PREVIEW_WIDTH}
                    title="/ImageElement"
                    width={HEADER_PREVIEW_WIDTH}
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
                        {"IconNano (10px)"}
                    </div>
                    <Icon
                        icon={'icon-pig'}
                        onClick={this.handleIconNanoClick}
                        size={'nano'}
                    />
                    <div className={styles.subHeader}>
                        {"IconMicro (12px)"}
                    </div>
                    <Icon
                        icon={'icon-cow'}
                        onClick={this.handleIconMicroClick}
                        size={'micro'}
                    />
                    <div className={styles.subHeader}>
                        {"IconMini (16px)"}
                    </div>
                    <Icon
                        icon={'icon-tune'}
                        onClick={this.handleIconMiniClick}
                        size={'mini'}
                    />
                    <div className={styles.subHeader}>
                        {"IconSmall (20px)"}
                    </div>
                    <Icon
                        icon={'icon-work'}
                        onClick={this.handleIconSmallClick}
                        size={'small'}
                    />
                    <div className={styles.subHeader}>
                        {"IconStandard (24px)"}
                    </div>
                    <Icon
                        icon={'icon-lens'}
                        onClick={this.handleIconStandardClick}
                        size={'standard'}
                    />
                    <div className={styles.subHeader}>
                        {"IconLarge1 (36px)"}
                    </div>
                    <Icon
                        icon={'icon-star'}
                        onClick={this.handleIconLargeOneClick}
                        size={'large1'}
                    />
                    <div className={styles.subHeader}>
                        {"IconLarge2 (46px)"}
                    </div>
                    <Icon
                        icon={'icon-fish'}
                        onClick={this.handleIconLargeTwoClick}
                        size={'large2'}
                    />
                    <div className={styles.subHeader}>
                        {"IconDisplay1 (72px)"}
                    </div>
                    <Icon
                        icon={'icon-pets'}
                        onClick={this.handleIconDisplayOneClick}
                        size={'display1'}
                    />
                    <div className={styles.subHeader}>
                        {"IconDisplay2 (96px)"}
                    </div>
                    <Icon
                        icon={'icon-duck'}
                        onClick={this.handleIconDisplayTwoClick}
                        size={'display2'}
                    />
                </Preview>

                <Preview title="/typography">
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
                    <Typography type={'ingressTitles'}>{"ingressTitles (18px)"}</Typography>
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
                        link={"/"}
                        size={"small"}
                        user={"all"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Standard (36px)"}
                    </div>
                    <Avatar
                        link={"/"}
                        size={"standard"}
                        user={"friends"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Large (48px)"}
                    </div>
                    <Avatar
                        link={"/"}
                        size={"large"}
                        user={"none"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display1 (72px)"}
                    </div>
                    <Avatar
                        link={"/"}
                        size={"display1"}
                        user={"all"}
                    />
                    <div className={styles.subHeader}>
                        {"Avatar Display2 (96px)"}
                    </div>
                    <Avatar
                        link={"/"}
                        size={"display2"}
                        user={"none"}
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
                            {'Label Pair - timestamp-points'}
                    </div>
                    <LabelPair
                        onClick={this.handleIconDisplayTwoClick}
                        points={'12'}
                    />
                    <div className={styles.subHeader}>
                        {'Label Pair - points-co2'}
                    </div>
                    <LabelPair
                        co2={'165'}
                        onClick={this.handleIconDisplayTwoClick}
                        points={'12'}
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
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'standard'}
                    />
                    <div className={styles.subHeader}>
                        {'Side/Bottom Wrapper'}
                    </div>
                    <Wrapper
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'side-bottom'}
                    />
                    <div className={styles.subHeader}>
                        {'Side Wrapper'}
                    </div>
                    <Wrapper
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'side'}
                    />
                    <div className={styles.subHeader}>
                        {'Narrow Wrapper'}
                    </div>
                    <Wrapper
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'narrow'}
                    />
                    <div className={styles.subHeader}>
                        {'Slim Wrapper'}
                    </div>
                    <Wrapper
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'slim'}
                    />
                    <div className={styles.subHeader}>
                        {'Short Wrapper'}
                    </div>
                    <Wrapper
                        content={<img src={'http://placehold.it/100x50'} />}
                        size={'short'}
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
                        onClick={this.handleButtonClick}
                        user={'friends'}
                    />
                </Preview>

                <Preview title={"MaMeF10"}>
                    <MaMeF10 prompt={"Skriv noe..."} />
                </Preview>

                <h1>{"/mobile"}</h1>
                <h1>{"/pad"}</h1>
                <h1>{"/desktop"}</h1>
            </div>
        );
    }
}
