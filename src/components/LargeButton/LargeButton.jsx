import React from "react";
import styles from "./LargeButton.module.scss";

const LargeButton = (props) => {
    return <div className={styles.LargeButton}>{props.children}</div>;
};

export default LargeButton;
