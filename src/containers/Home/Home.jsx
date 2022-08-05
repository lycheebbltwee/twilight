import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import IntroText from "../../components/IntroText/IntroText";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <section className={styles.Home}>
            <Carousel />
            <IntroText />
        </section>
    );
};

export default Home;
