import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./ProductGrid.module.scss";

const ProductGrid = ({ productData }) => {
    const [dispProducts, setDispProducts] = useState([]);

    useEffect(() => {
        setDispProducts(productData);
    }, [productData]);

    return (
        <section className={styles.Products}>
            <SearchBar />
            <div className={styles.ProductGrid}>
                {dispProducts.map((products) => {
                    return (
                        <Link to={`/products/${products.id}`} key={products.id}>
                            <ProductCard product={products} />
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductGrid;
