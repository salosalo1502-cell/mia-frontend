
import styles from "./Card.module.css";


const Card = ({
  item,
  increaseQuantity,
  decreaseQuantity,
  removeProduct
}) => {

  return (

    <div className={styles.card}>

      <img
        className={styles.image}
        src={item.image}
        alt={item.name}
      />


      <div className={styles.info}>

        <h3>{item.name}</h3>

        <p className={styles.price}>
          {item.price} L
        </p>


        <div className={styles.quantityRow}>

          <span>QUANTITY</span>

          <div className={styles.quantityControls}>

            <button
              onClick={() => decreaseQuantity(item.name)}
            >
              -
            </button>


            <span>{item.quantity}</span>


            <button
              onClick={() => increaseQuantity(item.name)}
            >
              +
            </button>

          </div>

        </div>


        <button
          className={styles.removeButton}
          onClick={() => removeProduct(item.name)}
        >
          REMOVE
        </button>

      </div>

    </div>

  );

};


export default Card;
