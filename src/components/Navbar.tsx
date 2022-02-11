import logo from "logo.png";
import { Link } from "react-router-dom";

import styles from "./Navbar.module.scss";

const Navbar = () => (
  <nav className={styles.wrapper}>
    <Link to="/" className={styles.title}>
      <img src={logo} alt="Orlando Magic Logo" className={styles.title_logo} />
      <div className={styles.title_name}>Magic Juice</div>
    </Link>
  </nav>
);

export default Navbar;
