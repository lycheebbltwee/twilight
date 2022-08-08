import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ProductContent from "../../components/ProductContent/";
import { DataContext } from "../../context/dataContext";

const ProductPage = () => {
    const { products } = useContext(DataContext);
    const { id } = useParams();

    return (
        <div>
            {products
                .filter((products) => products.id === id)
                .map((singleProduct, index) => {
                    return (
                        <ProductContent product={singleProduct} key={index} />
                    );
                })}
        </div>
    );
};

export default ProductPage;
