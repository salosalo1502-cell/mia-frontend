import style from './deliverContainer.module.css';
import map from '../images/ruka.png';
import resursebi from '../images/resursebi.png';




const DeliverContainer =()=>{

return(

<section className ={style.deliveringContainer}>

<div className={style.clientsProduct}>
<p className={style.markets}>markets we serve </p>

<h1 className={style.deliverinQuality}>Delivering Quality<br/>



 to Global Markets </h1>

<p className={style.marketsSpeach}>
  We proudly supply our products to clients across post-Soviet markets. 
    </p>




<span className={style.redline}></span>

</div>

<div className={style.globalSalution}>

<img src={map} alt="map"/>


</div>

<div className={style.cavkasus}>

<img src={resursebi} alt="resursebi"/>



</div>




</section>

)

}


export default DeliverContainer;