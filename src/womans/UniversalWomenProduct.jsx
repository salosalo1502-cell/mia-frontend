
import { useParams, Link } from "react-router-dom";

import style from "./TailoredBlazer.module.css";

import Navbar from "../navbar/navbar";
import { ArrowRight, ShoppingCart } from "lucide-react";

import shorena from "../images/Shorena.png";
import mzia from "../images/mzia.png";
import elene from "../images/elenae.png";
import niola from "../images/nilola.png";
import StylePropertyMap from "./UniversalWomenProduct.module.css";
import { useState } from "react";





import gvanca from "../images/gvanca.png";



const UniversalWomenProduct = () => {

  const { productName } = useParams();


  const products = [

    {
      name: "TAILORED BLAZER",
      description:
        "A refined tailored blazer designed with a modern silhouette, clean lines, and carefully selected fabric for effortless elegance.",
      price: 123,
      category: "Women",
      image: shorena
    },

    {
      name: "SILK DRESS",
      description:
        "An elegant silk dress designed with a refined silhouette and effortless movement for a sophisticated contemporary look.",
      price: 135,
      category: "Women",
      image: mzia
    },

    {
      name: "WIDE LEG TROUSERS",
      description:
        "Modern wide leg trousers designed with a comfortable silhouette, clean tailoring, and effortless contemporary style.",
      price: 103,
      category: "Women",
      image: gvanca
    },

    {
      name: "SIGNATURE SKIRT",
      description:
        "A refined signature skirt designed with a modern silhouette, elegant proportions, and versatile everyday sophistication.",
      price: 123,
      category: "Women",
      image: elene
    }

  ];


  const product = products.find(
    (item) =>
      item.name.toLowerCase() ===
      decodeURIComponent(productName).toLowerCase()
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

    return <h2>Product not found</h2>;

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


            <li className={style.suitsFeature}>
              L {product.price}
            </li>


          </ul>


          <div className={StylePropertyMap.cartActions}>


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


      <section className={style.suitsChoise}>


        <h2>
          YOU MAY ALSO LIKE
        </h2>


        <div className={style.suitsChoiseImages}>


          {products
            .filter(
              (item) =>
                item.name !== product.name
            )
            .slice(0, 3)
            .map((item) => {


              const categoryPath = {

                "TAILORED BLAZER":
                  "tailored",

                "SILK DRESS":
                  "dresses",

                "WIDE LEG TROUSERS":
                  "trousers",

                "SIGNATURE SKIRT":
                  "skirts"

              };


              return (

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
                      item.name ===
                      "TAILORED BLAZER"

                        ? "/womans/tailored"

                        : `/womans/${categoryPath[item.name]}/${encodeURIComponent(item.name)}`
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

              );

            })}


        </div>


      </section>


    </div>

  );

};


export default UniversalWomenProduct;