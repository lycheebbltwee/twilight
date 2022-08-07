import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import LargeButton from "../LargeButton";
import buttonStyle from "./../LargeButton/LargeButton.module.scss";
import styles from "./ProductContent.module.scss";

const ProductContent = ({ product, onChange }) => {
    const { id, name, description, price, imageLink, favourite, stock } =
        product;

    const { cart, setCart } = useContext(CartContext);

    // Adding products to cart
    const addToCart = () => {
        if (stock === 0) {
            return alert("Out of stock");
        }

        const copyOf = [...cart];
        const newItem = { id, name, price, quantity: 1 };

        const currentCart = cart.some((product) => newItem.id === product.id);
        const index = cart.map((product) => product.id).indexOf(newItem.id);

        if (currentCart === true) {
            copyOf[index].quantity += 1;
        } else {
            copyOf.push(newItem);
        }

        setCart(copyOf);
    };

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
