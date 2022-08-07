import React from "react";
import ProductCard from "../../components/ProductCard";
import styles from "./Favourites.module.scss";

const Favourites = ({ productData }) => {
    return (
        <div className={styles.Favourites}>
            {productData
                .filter((products) => products.favourite === true)
                .map((favouritedProduct) => {
                    return (
                        <ProductCard
                            key={favouritedProduct.id}
                            product={favouritedProduct}
                        />
                    );
                })}
        </div>
    );
};

export default Favourites;
