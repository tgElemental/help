import { Link } from "react-router-dom";
import { Image, Layout, Button, Spin } from "antd";
const { Footer: AntFooter } = Layout;
import FourImage from "../assets/four.jpeg";
import { useState } from "react";
const PageFour = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Layout>
      <div>
        <h1>نتیجه</h1>
        {isLoading && <Spin />}
        <Image
          src={FourImage}
          alt="Game"
          placeholder={<Spin />}
          onError={() => console.error("Failed to load image")}
          onLoad={handleImageLoad}
          className="mainimage"
        />
        <p>بر اساس قدرت عنصری که بازی کردید، برنده، مساوی یا بازنده می‌شوید.</p>
      </div>
      <AntFooter>
        <Link to="/five" className="nextlink">
          <Button type="primary" size="large" block>
            بعدی
          </Button>
        </Link>
      </AntFooter>
    </Layout>
  );
};

export default PageFour;
