
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { ArrowLeft } from "lucide-react";

import styles from "./CheckOut.module.css";






const CheckOut = () => {

  const [cartItems, setCartItems] = useState([]);

  const [orderSuccess, setOrderSuccess] = useState(false);

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: ""
  });

  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });


  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {

      const products = JSON.parse(savedCart);

      setCartItems(products);

    }

  }, []);


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  const handlePaymentChange = (e) => {

    const { name, value } = e.target;

    setPaymentData({
      ...paymentData,
      [name]: value
    });

  };


  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.quantity || 1),
    0
  );


  const handleSubmit = async (e) => {

    e.preventDefault();


    setPaymentSuccess(true);


    const orderData = {

      customer: formData,

      items: cartItems.map((item) => ({

        name: item.name,

        price: item.price,

        quantity: item.quantity || 1,

        image: item.image

      })),

      total: totalPrice,

      status: "paid"

    };


    try {

      const response = await fetch(
        "https://mia-backend-vcmg.onrender.com/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(orderData),

        }
      );


      const data = await response.json();


      


      localStorage.removeItem("cart");

      setCartItems([]);

      setOrderSuccess(true);


    } catch (error) {

      console.error("ORDER ERROR:", error);

    }

  };


  return (

    <div className={styles.checkoutPage}>


      <Link
        to="/"
        className={styles.backToShop}
      >

        <ArrowLeft
          size={25}
          strokeWidth={1.5}
        />

        <span className={styles.backArrow}></span>

      </Link>


      <h1 className={styles.title}>
        CHECKOUT
      </h1>


      <div className={styles.checkoutContainer}>


       

        <div className={styles.customerSection}>


          <h2>
            CUSTOMER INFORMATION
          </h2>


          <form onSubmit={handleSubmit}>


            <div className={styles.inputRow}>


              <div className={styles.inputGroup}>

                <label>
                  FIRST NAME
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className={styles.inputGroup}>

                <label>
                  LAST NAME
                </label>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />

              </div>


            </div>


            <div className={styles.inputGroup}>

              <label>
                EMAIL
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            <div className={styles.inputGroup}>

              <label>
                PHONE
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>


            <div className={styles.inputGroup}>

              <label>
                ADDRESS
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />

            </div>


            <div className={styles.inputRow}>


              <div className={styles.inputGroup}>

                <label>
                  CITY
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className={styles.inputGroup}>

                <label>
                  COUNTRY
                </label>

                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />

              </div>


            </div>


           

            <div className={styles.paymentSection}>


              <h2>
                CARD PAYMENT
              </h2>


              <div className={styles.inputGroup}>

                <label>
                  CARDHOLDER NAME
                </label>

                <input
                  type="text"
                  name="cardholderName"
                  value={paymentData.cardholderName}
                  onChange={handlePaymentChange}
                  required
                />

              </div>


              <div className={styles.inputGroup}>

                <label>
                  CARD NUMBER
                </label>

                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handlePaymentChange}
                  placeholder="0000 0000 0000 0000"
                  maxLength="19"
                  required
                />

              </div>


              <div className={styles.inputRow}>


                <div className={styles.inputGroup}>

                  <label>
                    EXPIRY DATE
                  </label>

                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handlePaymentChange}
                    placeholder="MM / YY"
                    maxLength="7"
                    required
                  />

                </div>


                <div className={styles.inputGroup}>

                  <label>
                    CVV
                  </label>

                  <input
                    type="password"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handlePaymentChange}
                    placeholder="•••"
                    maxLength="4"
                    required
                  />

                </div>


              </div>


            </div>


            <button
              type="submit"
              className={styles.placeOrderButton}
            >
              PAY NOW
            </button>


            {paymentSuccess && (

              <div className={styles.paymentSuccess}>

                <h2>
                  PAYMENT SUCCESSFUL
                </h2>

                <p>
                  YOUR PAYMENT HAS BEEN COMPLETED.
                </p>

              </div>

            )}


            {orderSuccess && (

              <div className={styles.orderSuccess}>

                <h2>
                  ORDER SUCCESSFUL
                </h2>

                <p>
                  YOUR ORDER HAS BEEN PLACED SUCCESSFULLY.
                </p>

              </div>

            )}


          </form>

        </div>


       

        <div className={styles.orderSection}>


          <h2>
            YOUR ORDER
          </h2>


          {cartItems.length === 0 ? (

            <p>
              YOUR CART IS EMPTY
            </p>

          ) : (

            cartItems.map((item) => (

              <div
                className={styles.orderItem}
                key={item.name}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />


                <div className={styles.orderInfo}>

                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    QUANTITY: {item.quantity || 1}
                  </p>

                  <p>
                    {item.price} L
                  </p>

                </div>

              </div>

            ))

          )}


          <div className={styles.total}>

            <span>
              TOTAL
            </span>

            <span>
              {totalPrice} L
            </span>

          </div>


        </div>


      </div>


    </div>

  );

};


export default CheckOut;