import React from "react";
import styles from "./TextField.module.scss";

const TextField = ({ onChange, textFieldValue }) => {
    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search for a product"
            onChange={handleChange}
            value={textFieldValue}
            className={styles.TextField}
        />
    );
};

export default TextField;
