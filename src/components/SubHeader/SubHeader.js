import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './SubHeader.css';

const categories = [
  'Comics',
  'Dictionaries',
  'Novels',
  'Fantasy',
  'Horror',
  'Adventure',
];

export const SubHeader = () => {
  return (
    <div className='site-page-subheader-ghost-wrapper'>
      <Space size={'middle'}>
        <Space size={'small'} style={{ fontWeight: 'bold' }}>
          <MenuOutlined />
          <Link to='/categories' state={'Comics'}>
            Categories
          </Link>
        </Space>
        {categories.map((e, i) => {
          return (
            <Link to='/categories' state={e} className='categories' key={i}>
              {e}
            </Link>
          );
        })}
      </Space>
    </div>
  );
};
