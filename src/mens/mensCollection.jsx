import Navbar from "../navbar/navbar";
import mens from '../images/salamanro.jpg';
import style from  './mensCollection.module.css';
import galstuki from '../images/galstuli.png';
import svitri from '../images/scistri.png';
import saroChka from '../images/sarochka.png';
import pijaki from '../images/pijaki.png';
import pilo from '../images/pilo.png';
import palto from '../images/palto.png';
import { ArrowRight } from "lucide-react";
import sharvali from '../images/sharvali.png';
import paltos from '../images/paltos.png';
import had from '../images/hed.png';
import persovi from '../images/rersovi.png';
import shorti from '../images/shorty.png';
import Footer from '../footer/futer.jsx';


import { Link } from 'react-router-dom';

const MensCollection = () => {

  


  

  return (

    <div>

      <Navbar />


      <section className={style.MensCollection}>

        <div className={style.mensImage}>

          <img
            src={mens}
            alt="mens"
          />

        </div>


        <div className={style.mensHerro}>

          <h3>
            MENS COLLECTION
          </h3>

          <p>
            Contemporary garments crafted
            │ │ with precision and quality.
          </p>

        </div>

      </section>


      <section className={style.modernProcession}>

        <p>
          ABOUT OUR COLLECTION
        </p>

        <h3>
          Timeless Style. Modern Precision
        </h3>

        <span className={style.value}></span>

        <p className={style.mensModern}>
         Our men's collection combines refined tailoring,
          premium fabrics, and attention to detail.
           Designed for men who value quality,
            comfort, and confidence.
        </p>

      </section>


      <section className={style.mensCategory}>

        <div className={style.categotyHeder}>

          <p>
            SHOP BY CATEGORY
          </p>

          <h3>
            Find Your Perfect Style
          </h3>

        </div>


        <div className={style.mensCategoryContainer}>

          <div className={style.categoryImages}>


            

            <div className={style.imageFunqional}>

              <img
                src={galstuki}
                alt="galstuki"
              />

              <div className={style.iconoses}>

                <img
                  src={palto}
                  alt="palto"
                />

                <div className={style.paltosIcons}>

                  <h4>
                    Suits
                  </h4>

                </div>


                <Link to="/mens/suits">

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </div>

            </div>


           

            <div className={style.imageFunqional}>

              <img
                src={svitri}
                alt="svitri"
              />

              <div className={style.iconoses}>

                <img
                  src={paltos}
                  alt="paltos"
                />

                <div className={style.paltosIcons}>

                  <h4>
                    Jackets
                  </h4>

                </div>


                <Link to="/mens/jackets/JACKET">

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </div>

            </div>


            {/* SHIRTS */}

            <div className={style.imageFunqional}>

              <img
                src={saroChka}
                alt="saroChka"
              />

              <div className={style.iconoses}>

                <img
                  src={palto}
                  alt="palto"
                />

                <div className={style.paltosIcons}>

                  <h4>
                    Shirts
                  </h4>

                </div>


                <Link to="/mens/shirts/SHIRTS">

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </div>

            </div>


            

            <div className={style.imageFunqional}>

              <img
                src={pijaki}
                alt="pijaki"
              />

              <div className={style.iconoses}>

                <img
                  src={sharvali}
                  alt="sharvali"
                />

                <div className={style.paltosIcons}>

                  <h4>
                    Trousers
                  </h4>

                </div>


                <Link to="/mens/trousers/TROUSERS">

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </div>

            </div>


            

            <div className={style.imageFunqional}>

              <img
                src={pilo}
                alt="pilo"
              />

              <div className={style.iconoses}>

                <img
                  src={palto}
                  alt="palto"
                />

                <div className={style.paltosIcons}>

                  <h4>
                    Coats
                  </h4>

                </div>


                <Link to="/mens/coats/COATS">

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </div>

            </div>


          </div>

        </div>

      </section>


      <div className={style.collectionsoverlasis}>

        <section className={style.ourCollection}>

          <div className={style.ourCollectionHeader}>

            <p className={style.ourCollection}>
              OUR COLLECTION
            </p>

            <h3>
              Mens Collection /2026
            </h3>

            <p className={style.discover}>
              Discover selected pieces crafted 
              for a modern men's wardrobe.
            </p>

            <span className={style.collectionLinear}></span>

          </div>

        </section>


        <div className={style.imageFunqionaliti}>

          <div className={style.imgLayaout}>

            <img
              src={had}
              alt="had"
            />

          </div>


          <div className={style.iconose}>

            <div className={style.paltosI}>

              <h4>
                Signature Wool Jacket
              </h4>

              <p className={style.premium}>
                Premium-wool Regular-fit
              </p>

              <p>
                126 L
              </p>

              <p className={style.viewAll}>

                VIEW PRODUCT


                <Link to="/mens/jackets/SIGNATURE%20WOOL%20JACKET">

                  <ArrowRight
                    className={style.ruskos}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: '#660507'
                    }}
                  />

                </Link>

              </p>

            </div>

          </div>

        </div>


        <div className={style.catalogs}>

          <div className={style.catalogImages}>

            <img
              src={persovi}
              alt="persovi"
            />

            <img
              src={shorti}
              alt="shorti"
            />

          </div>

          <span className={style.collectionLinear}></span>

        </div>

      </div>


      <Footer />

    </div>

  );

};


export default MensCollection;

