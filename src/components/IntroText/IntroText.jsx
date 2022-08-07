import React from "react";
import { Link } from "react-router-dom";
import LargeButton from "../LargeButton/LargeButton";
import styles from "./IntroText.module.scss";
import buttonStyle from "../LargeButton/LargeButton.module.scss";

const IntroText = () => {
    return (
        <div className={styles.IntroText}>
            <h1>twilight</h1>
            <p>The lights turn on </p>
            <p>when the sun goes down.</p>
            <LargeButton>
                <Link to="/products">
                    <button className={buttonStyle.LargeButton}>
                        Shop now
                    </button>
                </Link>
            </LargeButton>
        </div>
    );
};

export default IntroText;
