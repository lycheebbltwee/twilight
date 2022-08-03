import React from "react";
import styles from "./SmallButton.module.scss";

const SmallButton = (props) => {
    return <div className={styles.SmallButton}>{props.children}</div>;
};

export default SmallButton;
