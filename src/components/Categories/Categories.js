import React, { useState } from 'react';
import { Button, Layout } from 'antd';
import { useLocation } from 'react-router';
import { Rating } from './Rating';
import { PriceRanges } from './PriceRanges';
import { Results } from './Results';
import './Categories.css';

export const Categories = () => {
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
            <Rating />
            <PriceRanges />
            <Button className='login'>Apply Filter</Button>
          </div>
        </Sider>
        <Content
          theme='light'
          style={{ padding: '35px', backgroundColor: 'white' }}
        >
          <h1 style={{ fontSize: '30px' }}>RESULTS</h1>
          <Results/>
        </Content>
      </Layout>
    </div>
  );
};
