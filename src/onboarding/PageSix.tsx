import { Link } from 'react-router-dom';
import { Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import SixImage from '../assets/six.jpeg';
import { useState } from 'react';
const PageSix = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
<Layout>
  <div>
  <h1>جایزه</h1>
  {isLoading && <Spin />}
      <Image
        src={SixImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>برخورد آتش و باد یک نور به شما جایزه می‌دهد.</p>
    </div>
  <AntFooter>
    <Link to="/seven" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
  );
};

export default PageSix;
