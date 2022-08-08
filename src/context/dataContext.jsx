import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/productServer.js";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const data = { products, setProducts };

    const getData = async () => {
        const data = await getProducts();
        setProducts(data);
    };

    useEffect(() => {
        getData();
    }, []);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
