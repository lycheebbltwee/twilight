import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import Home from "./containers/Home";
import ProductGrid from "./containers/ProductGrid";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<ProductGrid />} />
                <Route path="/product" element={<h1>Product Page</h1>} />
                <Route path="/favourites" element={<h1>Favourites</h1>} />
                <Route path="/cart" element={<h1>Cart</h1>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
