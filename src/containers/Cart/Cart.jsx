import React, { useContext, useEffect, useState } from "react";
import CartItem from "../../components/CartItem/CartItem";
import { CartContext } from "../../context/cartContext";
import styles from "./Cart.module.scss";

const Cart = () => {
    const { cart, setCart } = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const subtotal = cart.map((product) => {
            return product.quantity * product.price;
        });
        const grandTotal = subtotal.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        setTotalPrice(grandTotal);
    }, [cart]);

    const removeFromCart = (id) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
    };

    return (
        <div className={styles.Cart}>
            <div>
                <h2>Cart</h2>
                {cart.map((products) => {
                    return (
                        <CartItem
                            product={products}
                            key={products.id}
                            removeFromCart={removeFromCart}
                        />
                    );
                })}
            </div>
            <div>
                <span>
                    <p>Order summary</p>
                </span>

                {totalPrice !== 0 ? (
                    <div>
                        <p>Subtotal</p>
                        <span>
                            <p>${totalPrice}</p>
                        </span>
                    </div>
                ) : (
                    <p>Nothing in cart</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
