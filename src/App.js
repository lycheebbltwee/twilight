import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import ProductGrid from "./containers/ProductGrid/ProductGrid";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
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
