import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
    return (
        <section className={styles.Products}>
            <SearchBar />
            <div className={styles.ProductGrid}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default ProductGrid;
