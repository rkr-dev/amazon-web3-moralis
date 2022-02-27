import React from 'react';
import { Modal, Input, Spin } from 'antd';

export const ModalComponent = ({
  isModalVisible,
  isLoading,
  setIsLoading,
  handleOk,
  setIsModalVisible,
  setDelivery,
  book,
}) => {

  return (
    <Modal
      title='Purchase Product'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={() => {
        setIsModalVisible(false);
        setIsLoading(false);
      }}
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
      {isLoading && (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'10px',paddingBottom:'10px',border:'1px solid #f2f2f2',marginTop:'5px',borderRadius:'10px',transition:'all 3s ease-in'}} >
          <Spin>Loading..</Spin>
        </div>
      )}
    </Modal>
  );
};
