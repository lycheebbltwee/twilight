import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartContext";
import { updateCartItemQty } from "../../services/cartServer";
import Counter from "../Counter/Counter";
import styles from "./CartItem.module.scss";

const CartItem = ({ product, removeFromCart }) => {
    const { id, name, price, quantity } = product;
    const [itemQty, setItemQty] = useState(quantity);
    const { setCart } = useContext(CartContext);

    const handleQtyChange = (newQty) => {
        setItemQty(newQty);
        updateCartItemQty(id, newQty).then((items) => setCart(items));
    };

    useEffect(() => {
        if (quantity === 0) {
            removeFromCart(id);
        }
    }, [quantity]);

    return (
        <div className={styles.CartItem}>
            {/* <div>
                <img src={imageLink} alt={name} />
            </div> */}
            <div>
                <p>{name}</p>

                <p>${price} / per item</p>
            </div>
            <div>
                <Counter
                    count={itemQty}
                    changeQty={handleQtyChange}
                    productId={id}
                />
                <p>${price * quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;
