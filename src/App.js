import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import ProductGrid from "./containers/ProductGrid";
import ProductPage from "./containers/ProductPage";
import Favourites from "./containers/Favourites";
import CartProvider from "./context/cartContext";
import Cart from "./containers/Cart/Cart";
import DataProvider from "./context/dataContext";
import { useEffect } from "react";

function App() {
    return (
        <DataProvider>
            <CartProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductGrid />} />
                        <Route path="/products/:id" element={<ProductPage />} />
                        <Route path="/favourites" element={<Favourites />} />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
            </CartProvider>
        </DataProvider>
    );
}

export default App;
