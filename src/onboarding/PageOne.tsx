import { Link } from 'react-router-dom';
import { Flex,Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import OneImage from '../assets/one.jpeg';
import { useState } from 'react';
const PageOne = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
    <Flex vertical gap="small" style={{ width: '100%' }}>
<Layout>
  <div>
      <h1>دعوت دوستان</h1>
      {isLoading && <Spin />}
      <Image
        src={OneImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>بازی عناصر یک بازی ساده و بی‌دردسر است!</p>
    </div>
  <AntFooter>
    <Link to="/two" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
</Flex>
  );
};

export default PageOne;
