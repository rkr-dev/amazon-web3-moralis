import { Card, Rate } from 'antd';
import { Link } from 'react-router-dom';
import './Product.css';

export const Product = ({image,name,price,id,rating}) => {
  return (
    <Card>
      <div style={{ display: 'flex' }}>
        <img src={image} alt={name} width='300px'></img>
        <div>
          <p className='title'>{name}</p>
          <Rate value={rating} disabled={true}></Rate>
          <h2> ${price}</h2>
          <p>Ships to Your Location</p>
          <Link to={`/products/${id}`} className='login'>
            Got to Product Page
          </Link>
        </div>
      </div>
    </Card>
  );
}