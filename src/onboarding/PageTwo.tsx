import { Link } from "react-router-dom";
import { Image, Layout, Button, Spin } from "antd";
const { Footer: AntFooter } = Layout;
import TwoImage from "../assets/two.jpeg";
import { useState } from "react";
const PageTwo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Layout>
      <div>
        <h1>عناصر</h1>
        {isLoading && <Spin />}
        <Image
          src={TwoImage}
          alt="Game"
          placeholder={<Spin />}
          onError={() => console.error("Failed to load image")}
          onLoad={handleImageLoad}
          className="mainimage"
        />
        <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      </div>
      <AntFooter>
        <Link to="/three" className="nextlink">
          <Button type="primary" size="large" block>
            بعدی
          </Button>
        </Link>
      </AntFooter>
    </Layout>
  );
};

export default PageTwo;
