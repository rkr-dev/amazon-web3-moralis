import React from 'react';
import { Modal, Input } from 'antd';

export const ModalComponent = ({
  isModalVisible,
  handleOk,
  setIsModalVisible,
  setDelivery,
  book
}) => {
  return (
    <Modal
      title='Purchase Product'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={() => setIsModalVisible(false)}
    >
      <div style={{ display: 'flex' }}>
        <img src={book.image} alt='product' style={{ width: '200px' }}></img>
        <div>
          <h3>{book.name}</h3>
          <h2>${book.price}</h2>
          <h4>Delivery Address</h4>
          <Input onChange={(e) => setDelivery(e.target.value)}></Input>
        </div>
      </div>
    </Modal>
  );
};
