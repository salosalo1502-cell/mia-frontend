

import style from "./mensCategory.module.css";
import Navbar from "../navbar/navbar.jsx";
import { useParams } from 'react-router-dom';
import svitri from '../images/scistri.png';
import persovi from '../images/rersovi.png';
import galstuki from '../images/galstuli.png';
import pijaki from '../images/pijaki.png';
import pilo from '../images/pilo.png';
import had from '../images/hed.png';
import products from "../products/products.jsx";




const MensCategory = () => {

  const { category } = useParams();


  const categoryMap = {

    suits: "SUITS",

    jackets: "JACKET",

    shirts: "SHIRTS",

    trousers: "TROUSERS",

    coats: "COATS",

  };


  const productName =
    categoryMap[category.toLowerCase()];


  const product = products.find(
    (item) =>
      item.name === productName
  );


  if (!product) {

    return (

      <div>

        <Navbar />

        <h1>Product not found</h1>

      </div>

    );

  }


  return (

    <div>

      <Navbar />


      <section className={style.suits}>

        <h1>
          {product.name}
        </h1>


        <img
          src={product.image}
          alt={product.name}
        />


        <p>
          {product.description}
        </p>

      </section>

    </div>

  );

};


export default MensCategory;
