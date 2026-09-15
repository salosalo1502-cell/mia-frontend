import Navbar from '../navbar/navbar.jsx';
import style from './custom.module.css';
import danger from '../images/danger.png';

import flix from '../images/flix.png';
import { ArrowRight } from "lucide-react";
import gafrtxileba from '../images/gafrtxileba.png';

import globusi from '../images/globo.png';
import detals from '../images/detals.png';
import garderobi from '../images/garderobi.png';
import funjebi from '../images/funjebi.png';
import saxatavi from '../images/saxatavi rveuli.png';
import utosGilakebi from '../images/utos gilakebi.png';

import kacisXelebi from '../images/kacis xelebi.png';
import forMia from '../images/forMia.png';
import Footer from '../footer/futer.jsx';
import { Link } from 'react-router-dom';





const Custom = ()=>{

return(
<div>

<Navbar/>

<section className={style.customHeader}>

<div className={style.customSpeach}>

<div className={style.costomSpeachElements}>

<p className={style.costumProduction}>CUSTOM PRODUCTION</p>

<h1>Made for your Brand</h1>

<span className={style.customLineaar}></span>

<p>We turn your ideas into high-quality garments.
      From fabric selection to the final product,
       every detail is crafted to match your
        brand's vision.
     </p>

<div className={style.buttonContainer}>

  <Link to="/contaqt">
    <button type="button" className={style.customButtom}>
      LETS CREATE TOGETHER
    </button>
  </Link>

  <Link to="/contaqt">
    <ArrowRight
      className={style.airs}
      size={25}
      strokeWidth={1.5}
      style={{ color: '#660507' }}
    />
  </Link>

</div>




</div>

<div className={style.costomImage}>




 <img src={detals} alt="detals"/>   



</div>

</div>






</section>

<section className={style.ourVision}>


<div className ={style.visionTipografi}>


<h3 className={style.visionHead}>YOUR VISION YOUR EXPERTISE:</h3>

<h3 className={style.visionSecondary}>CUSTOM TEXTILE PRODUCTION</h3>

<p className ={style.visionList}>From concept to creation, we bring apparel designs to life </p>


</div>






</section>


<section className={style.customProcces}>

<h3 className={style.customProccesSpeach}>

THE CUSTOM PROCESS:YOUR PARTNERSHIP WITH MIA



</h3>


<div className={style.processCustomImages}>
<img src={kacisXelebi} alt="kacisXelebi"/>
<img src={saxatavi} alt="saxatavi"/>

<img src={funjebi} alt="funjebi"/>

<img src={utosGilakebi} alt="utosGilakebi"/>

<img src={garderobi} alt="garderobi"/>











    
</div>






</section>



<section className={style.readyStart}>

<div className={style.readyStartSpeach}>

<p>LETS BUILD SOMETHING CREAT TOGETHER</p>

<h3>Ready to start your Costom project?</h3>

</div>

<div className={style.readyStartSpeachButtom}>

<p> Contaqt us today and our teams will get back to you 

with the best solution for your brand



</p>
<Link to="/contaqt">
  <button type="button" className={style.readyStartsButton}>
    CONTAQT US
  </button>
</Link>

</div>


<div className={style.readyStartsImage}>

<img src={forMia} alt="forMia"/>



</div>






</section>



<Footer/>






</div>






)




}


export default Custom;