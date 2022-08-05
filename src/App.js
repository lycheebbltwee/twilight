import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "./services/server";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import ProductGrid from "./containers/ProductGrid";

function App() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home productData={products} />} />
                <Route
                    path="/products"
                    element={<ProductGrid productData={products} />}
                />
                <Route path="" element={<h1>Product Page</h1>} />
                <Route path="/favourites" element={<h1>Favourites</h1>} />
                <Route path="/cart" element={<h1>Cart</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
