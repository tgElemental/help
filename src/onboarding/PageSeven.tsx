import { Link } from 'react-router-dom';
import { Image, Layout, Button, Spin } from 'antd';
const { Footer: AntFooter } = Layout;
import SevenImage from '../assets/seven.jpeg';
import { useState } from 'react';
const PageSeven = () => {
const [isLoading, setIsLoading] = useState(true);
const handleImageLoad = () => {setIsLoading(false);};
  return (
<Layout>
  <div>
  <h1>جایزه</h1>
  {isLoading && <Spin />}
      <Image
        src={SevenImage}
        alt="Game"
        placeholder={<Spin />}
        onError={() => console.error('Failed to load image')}
        onLoad={handleImageLoad}
        className='mainimage'
      />
      <p>برخورد زمین و آب یک درخت به شما جایزه می‌دهد.</p>
    </div>
  <AntFooter>
    <Link to="/eight" className='nextlink'><Button type="primary" size="large" block>بعدی</Button></Link>
  </AntFooter>
</Layout>
  );
};

export default PageSeven;