import style from './aboutProcess.module.css';
import sakeraviManqana from '../images/sakeravi.png';
import ziritadi from '../images/saxe.webp'
import makrateli from "../images/makrateli.png";
import zapebi from '../images/zapi.png';
import xarisxi from '../images/xarisxi.png';






const AboutProcces =()=>{


return(


<section className={style.aboutProcces}>
  
          <div className={style.proccContainer}>
            


            <div className={style.processImage}>
              <img src={ziritadi} alt="makrateli" />
            </div>
            <div className={style.proccesHedderBlock}>
              

              

              <span className={style.oitlines} />

<h1 className={style.productHerro}>From Raw Material to Finished Product</h1>


              <p className={style. horest}>
                Every stage of production is carefully managed
                 in-house to ensure consistent quality, efficiency,
                  and reliability from raw material to the final product.
              </p>


<div className={style.processBlock}>

<div className={style.innerBlocks}>


  

<div className={style.sectionOne}>

<div className={style.innerBlockSection}>

<img className={style.sakeraviManqana} src={sakeraviManqana} alt="sakeraviManqana"/>

<h3>Fabric Development</h3>


<p>
We develop premium fabrics 
with carefully selected materials,
 ensuring consistency, durability, and performance for every collection.

</p>
</div>
 

<div className={style.innerBlockSection}>

<img className={style.makrateli} src={makrateli} alt="sakeraviManqana"/>

<h3>Cutting</h3>


<p   className={style.plaza}>Precision cutting technology minimizes
   material 
  waste while ensuring accurate dimensions
   for every garment.</p>





</div>






</div>






<div className={style.sectionTwo}>
<div className={style.innerBlockSection}>

<img className={style.zapebi} src={xarisxi} alt="xarisxi"/>

<h3>Quality Control</h3>


<p>Every product undergoes strict quality inspections
   to meet international manufacturing standards before delivery.</p>
</div>



<div className={style.innerBlockSection}>

<img className={style.zapebi} src={zapebi} alt="makrateli"/>

<h3>Packaging</h3>


<p>Products are carefully packed to ensure protection,
   presentation, and safe transportation to every destination.</p>
</div>



</div>





</div>





</div>













</div>




</div>

 </section>






)






}

export  default AboutProcces;
