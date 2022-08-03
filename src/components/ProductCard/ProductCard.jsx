import React from "react";
import styles from "./ProductCard.module.scss";

const ProductCard = () => {
    return (
        <div className={styles.ProductCard}>
            <img src="https://via.placeholder.com/250x330" alt="placeholder" />
            <p>
                <span>Product Name</span>
            </p>
            <p>Price</p>
        </div>
    );
};

export default ProductCard;
