import { useEffect, useState } from "react";

import Card from "./card";

import styles from "./Cart.module.css";
import { useNavigate } from "react-router-dom";



const Cart = () => {

  const [cartItems, setCartItems] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
const navigate = useNavigate();

  const loadCart = () => {

    const savedCart = localStorage.getItem("cart");


    if (!savedCart) {

      setCartItems([]);

      return;

    }


    try {

      const products = JSON.parse(savedCart);


      if (!Array.isArray(products)) {

        setCartItems([]);

        return;

      }


      const uniqueProducts = [];


      products.forEach((product) => {

        const productQuantity =
          product.quantity || 1;


        const existingProduct =
          uniqueProducts.find(
            (item) =>
              item.name === product.name
          );


        if (existingProduct) {

          existingProduct.quantity +=
            productQuantity;

        } else {

          uniqueProducts.push({

            ...product,

            quantity: productQuantity

          });

        }

      });


      setCartItems(uniqueProducts);


    } catch (error) {

      console.error(
        "Cart loading error:",
        error
      );

      setCartItems([]);

    }

  };


  useEffect(() => {

    loadCart();


    const handleCartUpdated = () => {

      loadCart();

    };


    const handleOpenCart = () => {

      loadCart();

      setIsOpen(true);

    };


    window.addEventListener(
      "cartUpdated",
      handleCartUpdated
    );


    window.addEventListener(
      "openCart",
      handleOpenCart
    );


    return () => {

      window.removeEventListener(
        "cartUpdated",
        handleCartUpdated
      );


      window.removeEventListener(
        "openCart",
        handleOpenCart
      );

    };

  }, []);


  const increaseQuantity = (productName) => {

    const updatedCart =
      cartItems.map((item) => {

        if (item.name === productName) {

          return {

            ...item,

            quantity: item.quantity + 1

          };

        }


        return item;

      });


    setCartItems(updatedCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };


  const decreaseQuantity = (productName) => {

    const updatedCart =
      cartItems.map((item) => {

        if (item.name === productName) {

          if (item.quantity > 1) {

            return {

              ...item,

              quantity: item.quantity - 1

            };

          }

        }


        return item;

      });


    setCartItems(updatedCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };


  const removeProduct = (productName) => {

    const updatedCart =
      cartItems.filter(
        (item) =>
          item.name !== productName
      );


    setCartItems(updatedCart);


    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  };


  const totalPrice =
    Array.isArray(cartItems)

      ? cartItems.reduce(
          (total, item) =>
            total +
            item.price *
            item.quantity,

          0
        )

      : 0;


  return (

    <>

      <div
        className={`${styles.overlay} ${
          isOpen
            ? styles.overlayOpen
            : ""
        }`}

        onClick={() =>
          setIsOpen(false)
        }
      />


      <div
        className={`${styles.drawer} ${
          isOpen
            ? styles.drawerOpen
            : ""
        }`}
      >

        <div
          className={styles.cartHeader}
        >

          <h1>YOUR CART</h1>


          <button
            className={
              styles.closeButton
            }

            onClick={() =>
              setIsOpen(false)
            }
          >
           +

          </button>

        </div>


        <div
          className={styles.cartContent}
        >

          {cartItems.length === 0 ? (

            <p
              className={
                styles.emptyCart
              }
            >
              YOUR CART IS EMPTY
            </p>

          ) : (

            cartItems.map((item) => (

              <Card

                key={item.name}

                item={item}

                increaseQuantity={
                  increaseQuantity
                }

                decreaseQuantity={
                  decreaseQuantity
                }

                removeProduct={
                  removeProduct
                }

              />

            ))

          )}

        </div>


        <div
          className={styles.cartFooter}
        >

          <div
            className={styles.total}
          >

            <span>TOTAL</span>

            <span>
              {totalPrice} L
            </span>

          </div>

<button 
  className={styles.checkoutButton}
  onClick={() => {
    setIsOpen(false);
    navigate("/checkout");
  }}
>
  CHECKOUT 
</button>




        </div>

      </div>

    </>

  );

};


export default Cart;