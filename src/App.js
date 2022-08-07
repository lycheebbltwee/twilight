import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts, updateProduct } from "./services/server";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import ProductGrid from "./containers/ProductGrid";
import ProductPage from "./containers/ProductPage";
import Favourites from "./containers/Favourites";
import CartProvider from "./context/cartContext";
import Cart from "./containers/Cart/Cart";

function App() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    const handleChange = async (newRecord) => {
        const { id, ...record } = newRecord;
        await updateProduct(id, record);
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <CartProvider>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home productData={products} />} />
                    <Route
                        path="/products"
                        element={<ProductGrid productData={products} />}
                    />
                    <Route
                        path="/products/:id"
                        element={
                            <ProductPage
                                productData={products}
                                onChange={handleChange}
                            />
                        }
                    />
                    <Route
                        path="/favourites"
                        element={<Favourites productData={products} />}
                    />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
