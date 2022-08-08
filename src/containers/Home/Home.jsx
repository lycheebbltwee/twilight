import React, { useContext } from "react";
import CarouselContainer from "../../components/CarouselContainer/CarouselContainer";
import IntroText from "../../components/IntroText/IntroText";
import { DataContext } from "../../context/dataContext";
import styles from "./Home.module.scss";

const Home = () => {
    const { products } = useContext(DataContext);
    return (
        <section className={styles.Home}>
            <CarouselContainer products={products} />
            <IntroText />
        </section>
    );
};

export default Home;
