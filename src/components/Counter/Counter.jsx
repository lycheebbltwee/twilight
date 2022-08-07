import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = ({ productStock }) => {
    const [quantity, setQuantity] = useState(0);

    const handleIncrement = () => {
        if (quantity === 0) return alert("Out of stock");
        if (quantity < productStock) setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    return (
        <div className={styles.Counter}>
            <button onClick={handleDecrement}>-</button>
            <p>{quantity}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;
