import style from './footer.module.module.css';

import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";






const Footer =()=>{

return(


<footer className={style.footer}>

      <div className={style.footerContainer}>

        <div className={style.footerBrand}>

          <h2>MIA</h2>
          <p>
            Quality textiles, precise craftsmanship,
            and reliable production.
          </p>
        </div>

        <div className={style.footerLinks}>
          <h3>Explore</h3>
          <a href="#">About Us</a>
          <a href="#">Our Process</a>
          <a href="#">Collections</a>
          <a href="#">Contact</a>
        </div>

        <div className={style.footerContact}>
          <h3>Contact</h3>
          <p>Tbilisi, Georgia</p>
          <p>info@textile.com</p>
          <p>+995 000 000 000</p>
        </div>



      </div>

    <div className={style.footerIconContainer} >

<FaFacebookF />
<FaLinkedinIn />
<FaWhatsapp />
<FaInstagram />

</div>



      <div className={style.footerBottom}>
        <span>© 2026 MIA. All rights reserved.</span>
        <span>Premium Textile Manufacturing</span>
      </div>

    </footer>

)



}

export default Footer;



