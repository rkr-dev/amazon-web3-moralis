import React from 'react';
import { PageHeader, Button, Input, Space, Badge } from 'antd';
import { ShoppingCartOutlined, MenuOutlined } from '@ant-design/icons';
import { useMoralis } from 'react-moralis';
import {
  bookstore as BookStore,
  logo as Amazon,
  usa as USA,
} from '../../images';
import './Header.css';
import { SubHeader } from '../SubHeader/SubHeader';

export const Header = () => {
  const { authenticate, account } = useMoralis();
  const { Search } = Input;
  return (
    <div className='site-page-header-ghost-wrapper'>
      <PageHeader
        ghost={false}
        extra={[
          <img src={Amazon} className='logo' key='1' />,
          <img src={BookStore} className='logo' key='2' />,
          <Search
            placeholder='Find A Product'
            enterButton
            className='searchBar'
            key='3'
          />,
          <Button
            className='login'
            type='primary'
            onClick={() => authenticate()}
            key='4'
          >
            {account ? (
              <span>{account.slice(0, 5)}...</span>
            ) : (
              <span>login</span>
            )}
          </Button>,
          <Space size={'large'} key='5'>
            <Badge count={0} showZero>
              <span className='header-buttons'>
                <ShoppingCartOutlined className='header-icon' />
                Cart
              </span>
            </Badge>
            <Space className='header-buttons' size={'small'}>
              <img src={USA} alt='region' className='flag'></img>▾
            </Space>
          </Space>,
        ]}
      ></PageHeader>
      <SubHeader/>
    </div>
  );
};
