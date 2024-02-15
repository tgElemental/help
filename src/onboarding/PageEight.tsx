import { Link } from 'react-router-dom';
import { Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import EightImage from '../assets/eight.jpeg';
import { useState } from 'react';
const PageEight = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
<Layout>
  <div>
  <h1>عناصر روزانه</h1>
  {isLoading && <Spin />}
      <Image
        src={EightImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>هر روز ۲۰ عنصر برای بازی دریافت می‌کنید، ۵ عنصر از هرکدام</p>
    </div>
  <AntFooter>
    <Link to="/nine" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
  );
};

export default PageEight;