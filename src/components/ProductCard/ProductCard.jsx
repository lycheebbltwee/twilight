import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
    const { name, price, imageLink } = product;

    return (
        <div className={styles.ProductCard}>
            <div>
                <img src={imageLink} alt={name} />
            </div>
            <p>
                <span>{name}</span>
            </p>
            <p>${price}</p>
        </div>
    );
};

export default ProductCard;
