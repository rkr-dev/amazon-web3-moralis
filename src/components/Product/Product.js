import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Product.css';

export const Product = ({ image, name, price, id, rating,about }) => {
  const book = {
    image,
    name,
    price,
    id,
    rating,
    about
  };
  const location = useLocation();

  return (
    <Card>
      <div style={{ display: 'flex' }}>
        <img src={image} alt={name} width='300px'></img>
        <div>
          <p className='title'>{name}</p>
          <Rate value={rating} disabled={true}></Rate>
          <h2> ${price}</h2>
          {
            (location.pathname = '/categories' ? (
              <p>Ships to Your Location</p>
            ) : (
              <p>No Import Fees & Free Shipping Included</p>
            ))
          }
          {
            (location.pathname = '/categories' && (
              <Link to={`/products/${id}`} className='login' state={book}>
                Got to Product Page
              </Link>
            ))
          }
        </div>
      </div>
    </Card>
  );
};
