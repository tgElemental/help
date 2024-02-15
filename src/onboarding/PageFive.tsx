import { Link } from 'react-router-dom';
import { Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import FiveImage from '../assets/five.jpeg';
import { useState } from 'react';
const PageFive = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
<Layout>
  <div>
  <h1>امتیاز</h1>
  {isLoading && <Spin />}
      <Image
        src={FiveImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>در حالت برنده ۳ امتیاز و در حالت مساوی ۱ امتیاز می‌گیرید.</p>
    </div>
  <AntFooter>
    <Link to="/six" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
  );
};

export default PageFive;
