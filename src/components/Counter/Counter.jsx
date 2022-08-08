import React from "react";
import styles from "./Counter.module.scss";

const Counter = ({ count, changeQty }) => {
    const handleIncrement = () => {
        if (count < 10) changeQty(count + 1);
    };

    const handleDecrement = () => {
        if (count > 0) changeQty(count - 1);
    };

    return (
        <div className={styles.Counter}>
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default Counter;
