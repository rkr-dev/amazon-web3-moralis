import { Radio, Rate, Space } from 'antd';

export const Rating = ({ rating, setRating }) => {
  return (
    <>
      <h2>Customer Reviews</h2>
      <Radio.Group value={rating} onChange={(e) => setRating(e.target.value)}>
        <Space direction='vertical'>
          <Radio value={5}>
            <Rate defaultValue={5} disabled={true}></Rate>
          </Radio>
          <Radio value={4}>
            <Rate defaultValue={4} disabled={true}></Rate>
          </Radio>
          <Radio value={3}>
            <Rate defaultValue={3} disabled={true}></Rate>
          </Radio>
          <Radio value={2}>
            <Rate defaultValue={2} disabled={true}></Rate>
          </Radio>
          <Radio value={1}>
            <Rate defaultValue={1} disabled={true}></Rate>
          </Radio>
        </Space>
      </Radio.Group>
    </>
  );
};
