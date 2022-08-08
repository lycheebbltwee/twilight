import React from "react";
import styles from "./SearchBar.module.scss";
import searchIcon from "./../../assets/icons/icons8-search-100.png";

const SearchBar = ({ onChange, searchValue }) => {
    const handleInput = (e) => {
        onChange(e);
    };
    return (
        <div className={styles.SearchBar}>
            <img src={searchIcon} alt="Search icon" />
            <input
                type="text"
                placeholder="Search for a product"
                value={searchValue}
                onInput={handleInput}
                className={styles.TextField}
            />
        </div>
    );
};

export default SearchBar;
