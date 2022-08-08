import React, { useState, useEffect, useContext } from "react";
import { getProducts, updateProduct } from "../../services/productServer";
import { CartContext } from "../../context/cartContext";
import { DataContext } from "../../context/dataContext";
import LargeButton from "../LargeButton";
import buttonStyle from "./../LargeButton/LargeButton.module.scss";
import styles from "./ProductContent.module.scss";
import { addItemToCart } from "../../services/cartServer";

const ProductContent = ({ product }) => {
    const { id, name, description, price, imageLink, favourite, stock } =
        product;

    const { setProducts } = useContext(DataContext);
    const { setCart } = useContext(CartContext);

    // Adding products to cart
    const addToCart = () => {
        if (stock === 0) {
            return alert("Out of stock");
        }
        const newItem = { id, name, price };
        addItemToCart(newItem).then((items) => setCart(items));
    };

    // Setting a product as a favourited
    const handleFavourite = async (newRecord) => {
        const { id, ...record } = newRecord;
        await updateProduct(id, record);
        const data = await getProducts();
        setProducts(data);
    };

    const [favouriteProduct, setFavouriteProduct] = useState(favourite);
    const handleClick = () => {
        setFavouriteProduct(!favouriteProduct);
    };

    useEffect(() => {
        handleFavourite({ ...product, favourite: favouriteProduct });
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
                        <button
                            className={buttonStyle.LargeButton}
                            onClick={addToCart}
                        >
                            Add to cart
                        </button>
                    </LargeButton>
                </div>
            </div>
        </div>
    );
};

export default ProductContent;
