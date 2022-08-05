import React from "react";
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import IntroText from "../../components/IntroText/IntroText";
import styles from "./Home.module.scss";

const Home = ({ productData }) => {
    return (
        <section className={styles.Home}>
            <CarouselContainer products={productData} />
            <IntroText />
        </section>
    );
};

export default Home;
