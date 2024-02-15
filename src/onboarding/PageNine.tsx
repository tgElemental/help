import { Link } from 'react-router-dom';
import { Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import NineImage from '../assets/nine.jpeg';
import { useState } from 'react';
const PageNine = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
<Layout>
  <div>
      <h1>دعوت دوستان</h1>
      {isLoading && <Spin />}
      <Image
        src={NineImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>بازی را به دوستان خود معرفی کنید و ۲۰ عنصر جدید برای خودتان بردارید!</p>
    </div>
  <AntFooter>
    <Link to="/" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
  );
};

export default PageNine;
