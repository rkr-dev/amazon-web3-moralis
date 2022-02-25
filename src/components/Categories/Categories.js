import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { useLocation } from 'react-router';
import { Rating } from './Rating';
import { PriceRanges } from './PriceRanges';
import { Results } from './Results';
import './Categories.css';

export const Categories = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  const [rating, setRating] = useState(1);
  const { state: category } = useLocation();
  const { Sider, Content } = Layout;
  return (
    <div className='container'>
      <div className='results-header'>
        <span>Showing Poducts for </span>
        <span className='category'>"{category}"</span>
      </div>
      <Layout>
        <Sider width='340px' theme='light' style={{ padding: '25px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Rating rating={rating} setRating={setRating} />
            <PriceRanges
              priceMin={priceMin}
              priceMax={priceMax}
              setPriceMin={setPriceMin}
              setPriceMax={setPriceMax}
            />
            <Button className='login'>Apply Filter</Button>
          </div>
        </Sider>
        <Content
          theme='light'
          style={{ padding: '35px', backgroundColor: 'white' }}
        >
          <h1 style={{ fontSize: '30px' }}>RESULTS</h1>
          <Results
            category={category}
            rating={rating}
            priceMin={priceMin}
            priceMax={priceMax}
          />
        </Content>
      </Layout>
    </div>
  );
};
