import style from './aboutContainer.module.css';

import love from '../images/love.png';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutContainer =()=>{

return(


<section className={style.aboutContainer}>
        <h1 className={style.aboutHeader}>About Us</h1>
        <span className={style.linear} />

        <div className={style.aboutContent}>
          <div className={style.AboutImage}>
            <img src={love} alt="images" />
          </div>

          <div className={style.aboutTitle}>
            <p>
             “We create more than garments — we build trust.
              With full control over every stage of production,
               we deliver quality, precision,
                and reliable solutions for global partners.
              <FaQuoteLeft size={5} />
            </p>
          </div>
        </div>
  
  
      </section>

)



}

export default AboutContainer;
