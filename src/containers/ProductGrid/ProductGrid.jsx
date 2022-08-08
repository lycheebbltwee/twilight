import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { DataContext } from "../../context/dataContext";
import styles from "./ProductGrid.module.scss";

const ProductGrid = () => {
    const { products } = useContext(DataContext);
    const [dispProducts, setDispProducts] = useState([]);
    const [search, setSearch] = useState("");

    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        setDispProducts(products);
    }, [products]);

    useEffect(() => {
        const updatedDisplayedProducts = products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });

        setDispProducts(updatedDisplayedProducts);
    }, [search]);

    return (
        <section className={styles.Products}>
            <SearchBar onChange={handleSearchInput} searchValue={search} />
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
