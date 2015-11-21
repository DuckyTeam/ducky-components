import React from "react";
import styles from "./styles.css";

function IconImage(props) {
    let imageuri = "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg";
    if (props.image) {
        imageuri = props.image;
        if (props.image === "friends") {
            imageuri = "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg";
        }
        else if (props.image === "all") {
            imageuri = "https://c1.staticflickr.com/5/4034/4544827697_6f73866999_b.jpg";
        }
    }
    return(
        <img onClick={props.onclick}
            alt={props.name}
            className={styles.circle}
            src={imageuri}
            />
    );
}

IconImage.propTypes = {
    image: React.PropTypes.string,
    name: React.PropTypes.string,
    onclick: React.PropTypes.func
};

export default IconImage;