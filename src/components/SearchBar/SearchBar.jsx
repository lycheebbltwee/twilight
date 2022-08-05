import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import TextField from "../TextField";
import searchIcon from "./../../assets/icons/icons8-search-100.png";

const SearchBar = () => {
    const [input, setInput] = useState("");

    return (
        <div className={styles.SearchBar}>
            <img src={searchIcon} alt="Search icon" />
            <TextField onChange={setInput} textFieldValue={input} />
        </div>
    );
};

export default SearchBar;
