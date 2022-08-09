import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { DataContext } from "../../context/dataContext";
import styles from "./Favourites.module.scss";

const Favourites = () => {
    const { products } = useContext(DataContext);

    return (
        <div className={styles.Favourites}>
            {products
                .filter((product) => product.favourite === true)
                .map((favouritedProduct) => {
                    return (
                        <Link
                            to={`/products/${favouritedProduct.id}`}
                            key={favouritedProduct.id}
                        >
                            <ProductCard product={favouritedProduct} />
                        </Link>
                    );
                })}
        </div>
    );
};

export default Favourites;
