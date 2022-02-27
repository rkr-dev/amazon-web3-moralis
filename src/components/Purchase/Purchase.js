import React, { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Select, Button } from 'antd';
import { ModalComponent } from '../Modal/Modal';

export const Purchase = ({ book }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [delivery, setDelivery] = useState('');
  const { Moralis, account, chainId } = useMoralis();
  const { Option } = Select;
  const handleOk = async () => {
    setIsLoading(true);
    const getPriceOptions = {
      address: '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0',
      chain: 'eth',
    };

    const price = await Moralis.Web3API.token.getTokenPrice(getPriceOptions);
    const priceOfMatic = book.price / price.usdPrice;

    const recieverDetails = {
      type: 'native',
      amount: Moralis.Units.ETH(priceOfMatic),
      receiver: '0xB6913De0E15aE0Ce35ffd5FD217485629e137fA9',
    };

    let result = await Moralis.transfer(recieverDetails);

    const Transaction = Moralis.Object.extend('Transaction');
    const transaction = new Transaction();

    transaction.set('Customer', account);
    transaction.set('Delivery', delivery);
    transaction.set('Product', book.name);

    transaction.save();
    setIsLoading(false);
    setIsModalVisible(false);
  };
  return (
    <>
      <span className='price'> ${book.price}</span>
      <p>No Import Fees & Free Shipping Included</p>
      <h1 style={{ color: 'green' }}> In Stock </h1>
      <h3>Quantity</h3>
      <Select defaultValue={1} style={{ width: '100%' }}>
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
      </Select>

      <Button
        className='login'
        style={{ width: '100%', marginTop: '50px' }}
        onClick={() => setIsModalVisible(true)}
      >
        <ShoppingCartOutlined /> Buy Now
      </Button>

      <ModalComponent
        isModalVisible={isModalVisible}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        handleOk={handleOk}
        setIsModalVisible={setIsModalVisible}
        delivery={delivery}
        setDelivery={setDelivery}
        book={book}
      />
    </>
  );
};
