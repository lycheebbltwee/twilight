import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ productData }) => {
    return (
        <section className={styles.Products}>
            <SearchBar />
            <div className={styles.ProductGrid}>
                {productData.map((products) => {
                    return <ProductCard product={products} key={products.id} />;
                })}
            </div>
        </section>
    );
};

export default ProductGrid;
