import { Card } from 'antd';
import { Link } from 'react-router-dom';
import './Card.css';

export const CardComponent = ({ cardData: { title, image, category, catCards } }) => {
  return (
    <Card className='card'>
      <h1>{title}</h1>
      {image && (
        <img
          src={image}
          alt={`${category} Category`}
          className='card-content'
        ></img>
      )}
      {
        catCards && 
          catCards.map((item,i) => (
            <img
                key={i}
                src={item}
                alt={`${category} Category`}
                className="card-category"
                onClick={() => console.log("beauty")}
              />
          ))
      }
      <br />
      <Link to='/categories' state={category} className='link'>
        Shop Now
      </Link>
    </Card>
  );
};
