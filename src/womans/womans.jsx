import Navbar from "../navbar/navbar";
import style from './womans.module.css'
import sciters from '../images/sciters.png';
import pijax from '../images/pijsx.png';
import ukans from '../images/ukana.png'
import qali from '../images/qali.png';
import kabasi from '../images/kabasI.png'

import womans from '../images/womans.png';
import shorena from '../images/Shorena.png';
import mzia from '../images/mzia.png';
import gvanca from '../images/gvanca.png';
import elene from '../images/nilola.png';
import hart from '../images/hart.png';
import fotoli from '../images/fotoli.png';
import nemsi from '../images/nemsi.png';
import gafrTxileba from '../images/gafrtxileba.png';
import globo from '../images/globo.png';
import miasp from '../images/miasp.png';
import Footer from '../footer/futer.jsx';
import sharvali from '../images/sharvali.png';
import paltos from '../images/paltos.png';
 import { ArrowRight } from "lucide-react";
import { useState } from "react";

import { Link } from "react-router-dom";

import  {useEffect } from 'react';




const Womans = () => {

  const [womenProductsFromDB, setWomenProductsFromDB] = useState([]);

  const products = [
    {
      name: 'Jackets',
      description:
        'Structured layers that bring character and sophistication to every look',
      price: 0,
      category: 'Women',
      image: pijax
    },
    {
      name: 'Dresses',
      description: 'Elegant silhouettes designed to move with confidence',
      price: 0,
      category: 'Women',
      image: ukans
    },
    {
      name: 'Trousers',
      description: 'Modern tailoring designed for comfort and versatility',
      price: 0,
      category: 'Women',
      image: qali
    },
    {
      name: 'Skirts',
      description:
        'Modern silhouettes designed for effortless elegance and everyday versatility',
      price: 0,
      category: 'Women',
      image: sciters
    }
  ];

  const womenProducts = [
    {
      name: 'TAILORED BLAZER',
      description:
        'A refined tailored blazer designed with a modern silhouette, clean lines, and carefully selected fabric for effortless elegance.',
      price: 123,
      category: 'Women',
      image: shorena
    },

    {
      name: 'SILK DRESS',
      description:
        'An elegant silk dress designed with a refined silhouette and effortless movement for a sophisticated contemporary look.',
      price: 135,
      category: 'Women',
      image: mzia
    },

    {
      name: 'WIDE LEG TROUSERS',
      description:
        'Modern wide leg trousers designed with a comfortable silhouette, clean tailoring, and effortless contemporary style.',
      price: 103,
      category: 'Women',
      image: gvanca
    },

    {
      name: 'SIGNATURE SKIRT',
      description:
        'A refined signature skirt designed with a modern silhouette, elegant proportions, and versatile everyday sophistication.',
      price: 123,
      category: 'Women',
      image: elene
    }
  ];

  const handleCreateProduct = async (product) => {

    const response = await fetch(
      'https://mia-backend-vcmg.onrender.com/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      }
    );

    const data = await response.json();

    console.log('PRODUCT FROM BACKEND:', data);
    console.log('PRODUCTS FROM DATABASE:', data.products);

  };

  const handleGetProducts = async () => {

    const response = await fetch(
      'https://mia-backend-vcmg.onrender.com/products?category=Women'
    );

    const data = await response.json();

    setWomenProductsFromDB(data.products);

    console.log(
      'WOMEN JACKETS FROM DATABASE:',
      data.products[0]
    );

  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (

    <div>

      <Navbar />

     

      <div className={style.womansImage}>

        <img
          src={womans}
          alt="womans"
        />

      </div>


      

      <div className={style.shopCategory}>

        <p>-SHOP BY CATEGORY-</p>

        <h3>
          Explore the Collection
        </h3>

        <span
          className={style.womansLinear}
        ></span>

        <h5
          className={style.discoverCarfuk}
        >
         Discover carefully selected styles designed for
          every occasion — from refined everyday essentials
           to sophisticated statement pieces.
        </h5>

      </div>


      
      <div
        className={style.womansCollectionImages}
      >

        

        <div
          className={style.womansContainer}
        >

          <div
            className={style.pojsxblock}
          >

            <img
              src={pijax}
              alt="pijax"
            />

            <div
              className={style.pojaxIcon}
            >

              <img
                className={style.paltos}
                src={paltos}
                alt="paltosi"
              />

              <h3>
                JACKETS
              </h3>

            </div>


            <p
              className={style.wievProductText}
            >
              Structured layers that bring character and sophistication to every look.
            </p>


            <div
              className={style.wievProduct}
            >

              <p>
                VIEW PRODUCT
              </p>

              <Link to="/womans/jackets">

                <ArrowRight
                  className={style.airs}
                  size={20}
                  style={{
                    color: "#660507"
                  }}
                />

              </Link>

            </div>

          </div>


          

          <div
            className={style.pojsxblock}
          >

            <img
              src={ukans}
              alt="ulana"
            />


            <div
              className={style.pojaxIcon}
            >

              <img
                className={style.cobasi}
                src={kabasi}
                alt="kabasi"
              />

              <h3>
                DRESSES
              </h3>

            </div>


            <p
              className={style.wievProductText}
            >
              Elegant silhouettes designed to move with confidence
            </p>


            <div
              className={style.wievProduct}
            >

              <p>
                VIEW PRODUCT
              </p>

              <Link to="/womans/dresses">

                <ArrowRight
                  className={style.airs}
                  size={20}
                  style={{
                    color: "#660507"
                  }}
                />

              </Link>

            </div>

          </div>


          

          <div
            className={style.pojsxblock}
          >

            <img
              src={qali}
              alt="qali"
            />


            <div
              className={style.pojaxIcon}
            >

              <img
                className={style.sharvali}
                src={sharvali}
                alt="sharvali"
              />

              <h3>
                TROUSERS
              </h3>

            </div>


            <p
              className={style.wievProductText}
            >
              Modern tailoring designed for comfort and versatility
            </p>


            <div
              className={style.wievProduct}
            >

              <p>
                VIEW PRODUCT
              </p>

              <Link to="/womans/trousers">

                <ArrowRight
                  className={style.airs}
                  size={20}
                  style={{
                    color: "#660507"
                  }}
                />

              </Link>

            </div>

          </div>


         

          <div
            className={style.pojsxblock}
          >

            <img
              src={sciters}
              alt="sciters"
            />


            <div
              className={style.pojaxIcon}
            >

              <img
                className={style.cobasi}
                src={sharvali}
                alt="sharvali"
              />

              <h3>
                SKIRTS
              </h3>

            </div>


            <p
              className={style.wievProductText}
            >
              Modern silhouettes designed for effortless elegance and everyday versatility
            </p>


            <div
              className={style.wievProduct}
            >

              <p>
                VIEW PRODUCT
              </p>

              <Link to="/womans/skirts">

                <ArrowRight
                  className={style.airs}
                  size={20}
                  style={{
                    color: '#660507'
                  }}
                />

              </Link>

            </div>

          </div>

        </div>

      </div>


      
      <section
        className={style.CatetedLiving}
      >

        <p>
          -our selection-
        </p>

        <h3>
          Curated for Modern Living
        </h3>

        <span
          className={style.womansLinear}
        ></span>

      </section>


      <div
        className={style.CatetedLivingImages}
      >


       

        <div
          className={style.shorenContainer}
        >

          <img
            src={shorena}
            alt="shorena"
          />

          <p>
            TAILORED BLAZER
          </p>


          <div
            className={style.shorensFlex}
          >

            <p
              className={style.prices}
            >
              L123
            </p>

            <img
              src={hart}
              alt="hart"
            />

          </div>


          <div
            className={style.wievProduct}
          >

            <p
              className={style.wievProductText}
            >
              VIEW PRODUCT
            </p>

            <Link to="/womans/tailored">

              <ArrowRight
                className={style.air}
                size={20}
                style={{
                  color: '#660507'
                }}
              />

            </Link>

          </div>

        </div>


        

        <div
          className={style.shorenContainer}
        >

          <img
            src={mzia}
            alt="mzia"
          />

          <p>
            SILK DRESS
          </p>


          <div
            className={style.shorensFlex}
          >

            <p
              className={style.prices}
            >
              L 135
            </p>

            <img
              src={hart}
              alt="hart"
            />

          </div>


          <div
            className={style.wievProduct}
          >

            <p
              className={style.wievProductText}
            >
              VIEW PRODUCT
            </p>

            <Link to="/womans/dresses/SILK%20DRESS">

              <ArrowRight
                className={style.air}
                size={20}
                style={{
                  color: '#660507'
                }}
              />

            </Link>

          </div>

        </div>


       
        <div
          className={style.shorenContainer}
        >

          <img
            src={gvanca}
            alt="gvanca"
          />

          <p>
            WIDE LEG TROUSERS
          </p>


          <div
            className={style.shorensFlex}
          >

            <p
              className={style.prices}
            >
              L 103
            </p>

            <img
              src={hart}
              alt="hart"
            />

          </div>


          <div
            className={style.wievProduct}
          >

            <p
              className={style.wievProductText}
            >
              VIEW PRODUCT
            </p>

            <Link to="/womans/trousers/WIDE%20LEG%20TROUSERS">

              <ArrowRight
                className={style.air}
                size={20}
                style={{
                  color: '#660507'
                }}
              />

            </Link>

          </div>

        </div>


        

        <div
          className={style.shorenContainer}
        >

          <img
            src={elene}
            alt="elene"
          />

          <p>
            SIGNATURE SKIRT
          </p>


          <div
            className={style.shorensFlex}
          >

            <p
              className={style.prices}
            >
              L123
            </p>

            <img
              src={hart}
              alt="hart"
            />

          </div>


          <div
            className={style.wievProduct}
          >

            <p
              className={style.wievProductText}
            >
              VIEW PRODUCT
            </p>

            <Link to="/womans/skirts/SIGNATURE%20SKIRT">

              <ArrowRight
                className={style.air}
                size={20}
                strokeWidth={1.5}
                style={{
                  color: '#660507'
                }}
              />

            </Link>

          </div>

        </div>

      </div>


      

      <section
        className={style.purpose}
      >

<div className={style.purposeHerro}>

<h2>Made With Purpose</h2>
 <span
              className={style.surpouseLinear}
            ></span>

</div>


        <div
          className={style.purposeContainer}
        >


          <div
            className={style.purposeFirst}
          >

            <p
              className={style.mianas}
            >
              -THE MIA STANDART-
            </p>

            <h3>
              Made With Purpose
            </h3>

            <span
              className={style.womansLinear}
            ></span>

            <p>
             Quality is not simply a detail — it is part of 
             every decision, 
             from fabric selection and craftsmanship
              to the final finish.
            </p>

          </div>


          <div
            className={style.purposeTwo}
          >

            <img
              src={fotoli}
              alt="fotoli"
            />

            <h5>
              PREMIUM MATERIALS
            </h5>

            <p>
              WE USE CAREFULE SELECTED FUBRICS THAT FILL BEAUTIFUL AND LEST
              LONGER
            </p>


            <div
              className={style.lineContainer}
            >

              <img
                src={gafrTxileba}
                alt="gafrtxileba"
              />

              <h5>
                QUALITY CONTROL
              </h5>

              <p>
                Each garment goes through stric checks to ensure lasting
                quality
              </p>

            </div>

          </div>


          <div
            className={style.purposeThree}
          >

            <img
              src={nemsi}
              alt="nemsi"
            />

            <h5>
              EXPERT GRAFMANSHIP
            </h5>

            <p>
              EVERY PRICE CARFIED WITH PROCESIAN CARE AND ATANTION TO DETAIL
            </p>


            <div
              className={style.lineContainer}
            >

              <img
                src={globo}
                alt="globo"
              />

              <h5>
                RESPONSIBLE APPROACH
              </h5>

              <p>
                WE are committed to responcible production and mindful chices
              </p>

            </div>

          </div>


        </div>

      </section>


      

      <section
        className={style.miasContainer}
      >

        <div
          className={style.sectinMia}
        >

          <img
            src={miasp}
            alt="miasp"
          />

        </div>


        <div
          className={style.overContainers}
        >

          <p>
            -FIND YOUR STYLE
          </p>

          <h3>
           Explore the complete Women's collection and 
           discover pieces created with precision, comfort, 
           and timeless elegance.
          </h3>

          <Link to="/contaqt" className={style.miasButtom} > CONTACT </Link>
          

              


        </div>

      </section>


      <Footer />

    </div>

  );
};

export default Womans;
