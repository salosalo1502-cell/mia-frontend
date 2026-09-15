










import style from './suits.module.css';
import Navbar from "../navbar/navbar";
import galstuki from '../images/galstuli.png';
import svitri from '../images/scistri.png';
import pijaki from '../images/pijaki.png';
import pilo from '../images/pilo.png';
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';



const Suits = () => {

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


  const handleAddToCart = () => {

    let cart =
      localStorage.getItem("cart");


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

      name: "SUITS",

      price: 125,

      category: "Men",

      image: galstuki,

      description:
        "Discover our collection of refined men's suits, designed for a confident and effortless look. Each piece combines clean tailoring with carefully selected fabrics and contemporary proportions."

    };


    const existingProduct =
      cart.find(
        (item) =>
          item.name === product.name
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


      

      <section
        className={style.suitsContainer}
      >

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
            src={galstuki}
            alt="galstuki"
          />


          {zoomVisible && (

            <div
              className={style.zoomWindow}

              style={{

                left: zoomPosition.x,

                top: zoomPosition.y,

                backgroundImage:
                  `url(${galstuki})`,

                backgroundPosition:
                  `${zoomPosition.bgX}% ${zoomPosition.bgY}%`,

              }}
            />

          )}

        </div>


        <div
          className={
            style.suitsTextContainer
          }
        >

          <h4>
            MEN'S COLLECTION
          </h4>


          <h2>
            SUITS
          </h2>


          <p
            className={
              style.suitsDescription
            }
          >
            Discover our collection of
            refined men's suits, designed for
            a confident and effortless look.
            Each piece combines clean
            tailoring with carefully selected
            fabrics and contemporary
            proportions.
          </p>


          <ul
            className={
              style.suitsFeatures
            }
          >

            <li
              className={
                style.suitsFeature
              }
            >
              Premium fabrics
            </li>


            <li
              className={
                style.suitsFeature
              }
            >
              Contemporary designs
            </li>


            <li
              className={
                style.suitsFeature
              }
            >
              Perfect fit
            </li>


            <li
              className={
                style.suitsFeature
              }
            >
              Modern regular fit
            </li>


            <li
              className={
                style.suitsFeature
              }
            >
              L 125
            </li>

          </ul>


          <div
            className={
              style.cartActions
            }
          >

            <button
              className={
                style.suitsButton
              }

              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>


            <button
              className={
                style.cartIconButton
              }

              onClick={handleOpenCart}

              aria-label="Open cart"
            >
             

             
            </button>

          </div>

        </div>

      </section>


      

      <section
        className={style.suitsChoise}
      >

        <h2>
          YOU MAY ALSO LIKE
        </h2>


        <div
          className={
            style.suitsChoiseImages
          }
        >


          

          <div
            className={
              style.suitsImages
            }
          >

            <img
              src={pilo}
              alt="pilto"
            />

            VIEW PRODUCT


            <Link
              to="/mens/coats/COATS"
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


          

          <div
            className={
              style.suitsImages
            }
          >

            <img
              src={pijaki}
              alt="pijaki"
            />

            VIEW PRODUCT


            <Link
              to="/mens/trousers/TROUSERS"
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


        

          <div
            className={
              style.suitsImages
            }
          >

            <img
              src={svitri}
              alt="svitri"
            />

            VIEW PRODUCT


            <Link
              to="/mens/jackets/JACKET"
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


        </div>

      </section>

    </div>

  );

};


export default Suits;