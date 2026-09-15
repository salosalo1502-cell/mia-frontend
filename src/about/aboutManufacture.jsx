import style from './aboutManufacture.module.css';
import manufactor from '../images/manufactor.png';
import premium from '../images/zapi.png';
import globalis from '../images/xarisxi.png';

const AboutManifucture =()=>{

return(

      <div className={style.aboutManufactureOverlay}>
        <section className={style.aboutManufacture}>
          <div className={style.aboutManufactureContent}>
            <div className={style.aboutManufactureImage}>
              <img src={manufactor} alt="images" />
            </div>
            <div className={style.aboutManufactureHerro}>
              <h3>modern manufacturing</h3>
            </div>
            <div className={style.aboutManufactureTitle}>
              <p>
               Complete textile production under one roof.
                From fabric development to finished garments,
                 every stage is managed in-house with
                  precision and efficiency.
              </p>
            </div>
          </div>

          <div className={style.aboutPremiumContent}>
            <div className={style.aboutPremiumImage}>
              <img src={premium} alt="images" />
            </div>
            <div className={style.aboutPremiunHerro}>
              <h3>Premium Quality</h3>
            </div>
            <div className={style.aboutPremiumTitle}>
              <p>
                Every fabric, every stitch, and every finished
                 product undergoes strict quality control
                  to ensure consistency, durability, and excellence.
              </p>
            </div>
          </div>

          <div className={style.aboutGlobalContent}>
            <div className={style.aboutGlobalImage}>
              <img src={globalis} alt="xarisxi" />
            </div>
            <div className={style.aboutGlobalHerro}>
              <h3>Global Partnership</h3>
            </div>
            <div className={style.aboutGlobalTitle}>
              <p>
               We build long-term partnerships by delivering
                quality products,
                competitive pricing, and dependable
                 service to clients across international markets.
              </p>
            </div>
          </div>
        </section>

       











</div>


)

}



export default AboutManifucture;