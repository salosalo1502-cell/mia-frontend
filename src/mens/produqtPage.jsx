



import styles from './suits.module.css';
import Navbar from "../navbar/navbar.jsx";
import { useState } from 'react';
import { ArrowRight } from "lucide-react";
import { useParams, Link } from 'react-router-dom';
import products from '../products/products.jsx';






const Prooductos = () => {

  const { productName } = useParams();

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

    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;


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

    let cart = localStorage.getItem("cart");


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


      <section className={styles.suitsContainer}>

        <div
          className={styles.suitsImage}

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
              className={styles.zoomWindow}

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


        <div className={styles.suitsTextContainer}>

          <h4>
            {product.category.toUpperCase()} COLLECTION
          </h4>


          <h2>
            {product.name}
          </h2>


          <p className={styles.suitsDescription}>
            {product.description}
          </p>


          <ul className={styles.suitsFeatures}>

            <li className={styles.suitsFeature}>
              Premium fabrics
            </li>

            <li className={styles.suitsFeature}>
              Contemporary designs
            </li>

            <li className={styles.suitsFeature}>
              Perfect fit
            </li>

            <li className={styles.suitsFeature}>
              Modern regular fit
            </li>
            
<li className={styles.suitsFeature}>
  L {product.price}
</li>

          </ul>


          <div className={styles.cartActions}>

            <button
              className={styles.suitsButton}
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>


            <button
              className={styles.cartIconButton}

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


      <section className={styles.suitsChoise}>

        <h2>
          YOU MAY ALSO LIKE
        </h2>


        <div className={styles.suitsChoiseImages}>

          {products
            .filter(
              (item) =>
                item.name !== product.name
            )
            .slice(0, 3)
            .map((item) => {

              const categoryPath = {

                SUITS: "suits",

                JACKET: "jackets",

                SHIRTS: "shirts",

                TROUSERS: "trousers",

                COATS: "coats",

                "SIGNATURE WOOL JACKET":
                  "jackets",

              };


              return (

                <div
                  className={styles.suitsImages}
                  key={item.name}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />


                  VIEW PRODUCT


                  <Link
                    to={`/mens/${categoryPath[item.name]}/${encodeURIComponent(item.name)}`}
                  >

                    <ArrowRight
                      className={styles.air}
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


export default Prooductos;