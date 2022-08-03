import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";
import SmallButton from "../../components/SmallButton";
import homeIcon from "./../../assets/icons/icons8-home-100.png";
import gridIcon from "./../../assets/icons/icons8-grid-100.png";
import faveIcon from "./../../assets/icons/icons8-heart-100.png";
import cartIcon from "./../../assets/icons/icons8-shopping-cart-100.png";

const Nav = () => {
    return (
        <nav className={styles.Nav}>
            <div className={styles.Nav_left}>
                <SmallButton>
                    <NavLink to="/">
                        <img src={homeIcon} alt="Home icon" />
                    </NavLink>
                </SmallButton>
                <SmallButton>
                    <NavLink to="/products">
                        <img src={gridIcon} alt="Product grid icon" />
                    </NavLink>
                </SmallButton>
            </div>
            <div className={styles.Nav_right}>
                <SmallButton>
                    <NavLink to="/favourites">
                        <img src={faveIcon} alt="Favourites icon" />
                    </NavLink>
                </SmallButton>
                <SmallButton>
                    <NavLink to="/cart">
                        <img src={cartIcon} alt="Cart icon" />
                    </NavLink>
                </SmallButton>
            </div>
        </nav>
    );
};

export default Nav;
