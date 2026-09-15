

import style from './navbar.module.css';

import logo from '../images/footerImage.jpg';

import{Link} from 'react-router-dom';
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";



const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>

      <section className={style.navbarContainer}>

        <nav className={style.navbar}>

          <div className={style.logoBox}>
            <img className={style.logo} src={logo} alt="logo" />
          </div>

          {/* Hamburger */}
          <button
            className={`${style.hamburger} ${menuOpen ? style.active : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>


          <ul
            className={`${style.navbarList} ${
              menuOpen ? style.mobileMenuOpen : ""
            }`}
          >

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </Link>
            </li>

            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                ABOUT
              </Link>
            </li>

            <li className={style.produtssList}>

              <Link to="">
                PRODUCTS
              </Link>

              <ul className={style.productssDropdown}>

                <Link to="/mens">MENS COLLECTION</Link>

                <Link to="/womans">WOMANS COLLECTION</Link>

                <Link to="/custom">CUSTOM PRODUCTION</Link>

              </ul>

            </li>

            <li className={style.companysProduction}>
              <Link to="/company" onClick={() => setMenuOpen(false)}>
              
                COMPANY
              </Link>
            </li>

            <li>
              <Link to="/contaqt" onClick={() => setMenuOpen(false)}>
                CONTACT
              </Link>
            </li>

          </ul>

        </nav>

      </section>

    </div>
  );
};

export default Navbar;
