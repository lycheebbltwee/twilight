import React, { useState, useEffect } from "react";
import LargeButton from "../LargeButton";
import buttonStyle from "./../LargeButton/LargeButton.module.scss";
import styles from "./ProductContent.module.scss";

const ProductContent = ({ product, onChange }) => {
    const { name, description, price, imageLink, favourite } = product;

    // Setting a product as a favourited
    const [favouriteProduct, setFavouriteProduct] = useState(favourite);
    const handleClick = () => {
        setFavouriteProduct(!favouriteProduct);
    };

    useEffect(() => {
        onChange({ ...product, favourite: favouriteProduct });
    }, [favouriteProduct]);

    return (
        <div className={styles.ProductContent}>
            <div className={styles.ProductContent_left}>
                <img src={imageLink} alt={name} />
            </div>
            <div className={styles.ProductContent_right}>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p>{description}</p>
                <div className={styles.ProductContent_buttons}>
                    <LargeButton>
                        <button
                            className={buttonStyle.LargeButton}
                            onClick={handleClick}
                        >
                            {favouriteProduct === true ? (
                                <span>Favourited</span>
                            ) : (
                                <span>Add to favourites</span>
                            )}
                        </button>
                    </LargeButton>
                    <LargeButton>
                        <button className={buttonStyle.LargeButton}>
                            Add to cart
                        </button>
                    </LargeButton>
                </div>
            </div>
        </div>
    );
};

export default ProductContent;
