import React from "react";
import { useParams } from "react-router-dom";
import ProductContent from "../../components/ProductContent/";

const ProductPage = ({ productData, onChange }) => {
    const { id } = useParams();

    return (
        <div>
            {productData
                .filter((products) => products.id === id)
                .map((singleProduct, index) => {
                    return (
                        <ProductContent
                            product={singleProduct}
                            key={index}
                            onChange={onChange}
                        />
                    );
                })}
        </div>
    );
};

export default ProductPage;
