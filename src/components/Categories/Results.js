import {useState,useEffect} from 'react'
import './Categories.css';
import { products } from '../../products';
import { Product } from '../Product/Product';

export const Results = ({ category="Comics", rating, priceMin, priceMax }) => {
  const [filteredProducts,setFilteredProducts] = useState([])
  console.log(category,rating,priceMin,priceMax,filteredProducts)
  useEffect(() => {

    setFilteredProducts(products[category]
    .filter((x) => x.rating >= rating)
    .filter((x) => x.price > priceMin)
    .filter((x) => x.price <= priceMax))
  },[category,rating,priceMin,priceMax])
  return (
    <>
      {filteredProducts.length >= 1 ? filteredProducts.map((product) => (
        <Product
          image={product.image}
          name={product.name}
          price={product.price}
          id={product.id}
          rating={rating}
          key={product.id}
        />
      )):<>No Results Found</>}
    </>
  );
};
