import React from "react";
import styles from "./Carousel.module.scss";
import Carousel from "react-bootstrap/Carousel";

const CarouselContainer = ({ products }) => {
    return (
        <div className={styles.CarouselContainer}>
            <Carousel fade>
                {products
                    .filter((product) => product.featured === true)
                    .map((featuredProduct, index) => {
                        return (
                            <Carousel.Item interval={10000} key={index}>
                                <img
                                    src={featuredProduct.imageLink}
                                    alt={featuredProduct.name}
                                    className={styles.CarouselContainer_img}
                                />
                            </Carousel.Item>
                        );
                    })}
            </Carousel>
        </div>
    );
};

export default CarouselContainer;
