import style from './header.module.css';

import Navbar from '../navbar/navbar.jsx';
import { Link } from 'react-router-dom';

const Header = () => {
  return (

<div>


    <header className={style.header}>

      <Navbar />


      <div className={style.headerContent}>
        <h1 className={style.headerTitle}>CHINESE TEXTILE IN GEORGIA</h1>
      
      </div>

<Link to="/about">
  <button type="button" className={style.headerButton}>
    Learn More
  </button>
</Link>


    </header>

</div>


  );
};

export default Header;