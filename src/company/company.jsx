import style from './company.module.css';
import Navbar from '../navbar/navbar.jsx';
import company from '../images/company.webp';
import miasmanu from '../images/miasManufaccor-removebg-preview.png';
import Footer from '../footer/futer.jsx';








const Company =()=>{

return(

<div>
<Navbar />


<section className={style.companyHeader}>

<div className={style.companyImage}>

<img src={company} alt="company"/>

</div>


<div className={style.companySpeach}>
<div className={style.companySpeachContainer}>

  <div className={style.searchALL}>

<p className={style.companySpeachTitle}>OUR COMPANY</p>

<h3>Crafted with Experience Delivered with Trust</h3>

<span className={style. companySpeachLinear}/>



<p>MIA is a vertically integrated and apparel manufacturer

delivering quality, reliability and innovation to partners around
Eastern European, Caucasus and Central Asian markets


</p>
</div>





<div className={style.companySpeachHeader}>

<h2>Where Quality Meets Precision.</h2>


</div>

</div>


</div>

</section>

<section className={style. whoweareBlocks}>

<div className={style. whoweareSpeach}>

<p>ABOUT MIA</p>

<h2>WHO WE ARE</h2>

<p className={style.miasP}>

MIA is a modern textile and garment 
company built on quality, precision, 
and long-term partnerships. With strong 
production capabilities and a clear understanding
 of international markets, we create garments and textile 
 solutions designed to meet the needs of our global partners.

Our focus extends across Georgia, Europe, and post-Soviet
 markets, where we aim to build a reliable presence through
  consistent quality, competitive solutions, and responsible production.

At MIA, we believe that every product is more than a garment — it is a
 reflection of our standards, our craftsmanship, and the trust we build
  with every partner.


</p>


</div>


<div className={style.whoweareImage}>

<img src={miasmanu} alt="mias manu"/>



</div>



</section>












<Footer/>






</div>







)




}

export default Company;