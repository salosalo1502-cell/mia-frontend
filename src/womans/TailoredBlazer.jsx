import { useState } from "react";
import style from "./TailoredBlazer.module.css";

import { Link } from "react-router-dom";

import Navbar from "../navbar/navbar";
import { ArrowRight } from "lucide-react";
import { ShoppingCart } from "lucide-react";


import mzia from "../images/mzia.png";
import elene from "../images/elenae.png";
import niola from "../images/nilola.png";
import Shorena from '../images/Shorena.png';



const TailoredBlazer = () => {

  const handleAddToCart = () => {

    let cart = localStorage.getItem("cart");

    if (cart === null) {
      cart = [];
    } else {
      try {
        cart = JSON.parse(cart);

        if (!Array.isArray(cart)) {
          cart = [];
        }
      } catch (error) {
        cart = [];
      }
    }

    const product = {
      name: "TAILORED BLAZER",
      price: 125,
      category: "Women",
      image: Shorena,
      description:
        "Discover our tailored blazer, designed with a refined silhouette and effortless elegance. Carefully selected fabric, clean lines, and precise tailoring create a timeless piece made for a confident and sophisticated look."
    };

    const existingProduct = cart.find(
      (item) => item.name === product.name
    );

    if (existingProduct) {
      existingProduct.quantity =
        (existingProduct.quantity || 1) + 1;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

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


  const handleOpenCart = () => {

    window.dispatchEvent(
      new Event("openCart")
    );

  };


  return (
    <div>

      <Navbar />

      {/* MAIN PRODUCT */}

      <section className={style.suitsContainer}>

        <div className={style.suitsImage}>

          <img
            src={Shorena}
            alt="Shorena"
          />

        </div>


        <div className={style.suitsTextContainer}>

          <h4>
            WOMANS COLLECTION
          </h4>


          <h2>
            TAILORED BLAZER
          </h2>


          <p className={style.suitsDescription}>
            Discover our tailored blazer, designed with a refined
            silhouette and effortless elegance. Carefully selected
            fabric, clean lines, and precise tailoring create a
            timeless piece made for a confident and sophisticated look.
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

            <li className={style.suitsFeature}>
              L 125
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
              onClick={handleOpenCart}
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


          {/* SILK DRESS */}

          <div className={style.suitsImages}>

            <img
              src={mzia}
              alt="SILK DRESS"
            />

            VIEW PRODUCT

            <Link to="/womans/dresses/SILK%20DRESS">

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


          {/* WIDE LEG TROUSERS */}

          <div className={style.suitsImages}>

            <img
              src={elene}
              alt="WIDE LEG TROUSERS"
            />

            VIEW PRODUCT

            <Link to="/womans/trousers/WIDE%20LEG%20TROUSERS">

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


          {/* SIGNATURE SKIRT */}

          <div className={style.suitsImages}>

            <img
              src={niola}
              alt="SIGNATURE SKIRT"
            />

            VIEW PRODUCT

            <Link to="/womans/skirts/SIGNATURE%20SKIRT">

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


        </div>

      </section>

    </div>
  );
};


export default TailoredBlazer;

