import style from './aboutImageContainer.module.css';

import ruloni from '../images/ruloni.png';
import qsova from '../images/qsova.png';
import mza from '../images/mza.png';
import nimushi from '../images/nimusi.png'







const AboutImageContainer = () =>{

return(

<div>
<p className={style.facture}>inside our factory</p>




<section className={style.aboutUsimageContainer}>

<img  className={style.ruloni} src={ruloni} alt="ruloni"/>

<img  className={style.qsova} src={qsova} alt="qsova"/>

<img  className={style.nimushi} src={nimushi} alt="nimushi"/>

<img  className={style.mza} src={mza} alt="mza"/>


</section>

</div>



)

}


export default AboutImageContainer;