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
          Categories
        </Space>
        {categories.map((e) => {
          return (
            <Link to='/categories' state={e} className='categories'>
              {e}
            </Link>
          );
        })}
      </Space>
    </div>
  );
};
