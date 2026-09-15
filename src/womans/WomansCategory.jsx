
import Navbar from '../navbar/navbar';
import style from './TailoredBlazer.module.css';

import pijax from '../images/pijsx.png';
import ukans from '../images/ukana.png';
import qali from '../images/qali.png';
import sciters from '../images/sciters.png';
import shorena from '../images/Shorena.png';
import mzia from "../images/mzia.png";
 import gvanca from "../images/gvanca.png"; 
 import elene from '../images/elenae.png';

import {Link } from "react-router-dom";
import { useState } from "react";


import { ArrowRight } from "lucide-react";

import styles from "./UniversalWomenProduct.module.css";

import { useParams } from 'react-router-dom';









const WomansCategory = () => {

  const { category } = useParams();


  const categoryMap = {

    jackets: "Jackets",

    dresses: "Dresses",

    trousers: "Trousers",

    skirts: "Skirts",

  };


  const products = [

    {
      name: "Jackets",
      description:
        "Structured layers that bring character and sophistication to every look",
      price: 0,
      category: "Women",
      image: pijax
    },

    {
      name: "Dresses",
      description:
        "Elegant silhouettes designed to move with confidence",
      price: 0,
      category: "Women",
      image: ukans
    },

    {
      name: "Trousers",
      description:
        "Modern tailoring designed for comfort and versatility",
      price: 0,
      category: "Women",
      image: qali
    },

    {
      name: "Skirts",
      description:
        "Modern silhouettes designed for effortless elegance and everyday versatility",
      price: 0,
      category: "Women",
      image: sciters
    }

  ];


  const relatedProducts = [

    {
      name: "TAILORED BLAZER",
      image: shorena
    },

    {
      name: "SILK DRESS",
      image: mzia
    },

    {
      name: "WIDE LEG TROUSERS",
      image: gvanca
    },

    {
      name: "SIGNATURE SKIRT",
      image: elene
    }

  ];


  const productName =
    categoryMap[category.toLowerCase()];


  const product = products.find(
    (item) =>
      item.name === productName
  );


  const [zoomVisible, setZoomVisible] = useState(false);


  const [zoomPosition, setZoomPosition] = useState({
    x: 0,
    y: 0,
    bgX: 50,
    bgY: 50,
  });


  const handleMouseMove = (e) => {

    const rect =
      e.currentTarget.getBoundingClientRect();


    const x =
      e.clientX - rect.left;


    const y =
      e.clientY - rect.top;


    const percentX =
      (x / rect.width) * 100;


    const percentY =
      (y / rect.height) * 100;


    setZoomPosition({
      x,
      y,
      bgX: percentX,
      bgY: percentY,
    });

  };


  if (!product) {

    return (

      <div>

        <Navbar />

        <h2>Product not found</h2>

      </div>

    );

  }


  const handleAddToCart = () => {

    let cart =
      localStorage.getItem("cart");


    if (cart === null) {

      cart = [];

    } else {

      cart = JSON.parse(cart);

    }


    cart.push(product);


    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );


    window.dispatchEvent(
      new Event("cartUpdated")
    );


    window.dispatchEvent(
      new Event("openCart")
    );

  };


  return (

    <div>

      <Navbar />


      {/* MAIN PRODUCT */}

      <section className={style.suitsContainer}>


        <div
          className={style.suitsImage}

          onMouseEnter={() =>
            setZoomVisible(true)
          }

          onMouseLeave={() =>
            setZoomVisible(false)
          }

          onMouseMove={handleMouseMove}
        >

          <img
            src={product.image}
            alt={product.name}
          />


          {zoomVisible && (

            <div
              className={style.zoomWindow}

              style={{
                left: zoomPosition.x,
                top: zoomPosition.y,
                backgroundImage:
                  `url(${product.image})`,
                backgroundPosition:
                  `${zoomPosition.bgX}% ${zoomPosition.bgY}%`,
              }}
            />

          )}

        </div>


        <div
          className={style.suitsTextContainer}
        >


          <h4>
            {product.category.toUpperCase()} COLLECTION
          </h4>


          <h2>
            {product.name}
          </h2>


          <p className={style.suitsDescription}>
            {product.description}
          </p>


          <ul className={style.suitsFeatures}>

            <li className={style.suitsFeature}>
              Premium fabrics
            </li>

            <li className={style.suitsFeature}>
              Contemporary designs
            </li>

            <li className={style.suitsFeature}>
              Perfect fit
            </li>

            <li className={style.suitsFeature}>
              Modern regular fit
            </li>

          </ul>


          <div className={style.cartActions}>

            <button
              className={style.suitsButton}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>


            <button
              className={style.cartIconButton}

              onClick={() =>
                window.dispatchEvent(
                  new Event("openCart")
                )
              }

              aria-label="Open cart"
            >

             

            </button>

          </div>


        </div>


      </section>


      {/* YOU MAY ALSO LIKE */}

      <section className={style.suitsChoise}>

        <h2>
          YOU MAY ALSO LIKE
        </h2>


        <div className={style.suitsChoiseImages}>


          {relatedProducts

            .slice(0, 3)

            .map((item) => (

              <div
                className={style.suitsImages}
                key={item.name}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                VIEW PRODUCT


                <Link
                  to={
                    item.name === "TAILORED BLAZER"

                      ? "/womans/tailored"

                      : `/womans/${
                          item.name === "SILK DRESS"
                            ? "dresses"
                            : item.name === "WIDE LEG TROUSERS"
                            ? "trousers"
                            : "skirts"
                        }/${encodeURIComponent(item.name)}`
                  }
                >

                  <ArrowRight
                    className={style.air}
                    size={25}
                    strokeWidth={1.5}
                    style={{
                      color: "#660507"
                    }}
                  />

                </Link>


              </div>

            ))}


        </div>

      </section>


    </div>

  );

};


export default WomansCategory;

