import { Link } from "react-router-dom";
import { Image, Layout, Button, Spin } from "antd";
const { Footer: AntFooter } = Layout;
import ThreeImage from "../assets/three.jpeg";
import { useState } from "react";
const PageThree = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Layout>
      <div>
        <h1>راند</h1>
        {isLoading && <Spin />}
        <Image
          src={ThreeImage}
          alt="Game"
          placeholder={<Spin />}
          onError={() => console.error("Failed to load image")}
          onLoad={handleImageLoad}
          className="mainimage"
        />
        <p>
          در هر راند شما یک عنصر انتخاب می‌کنید، رقیب هم یک عنصر انتخاب می‌کند.
        </p>
      </div>
      <AntFooter>
        <Link to="/four" className="nextlink">
          <Button type="primary" size="large" block>
            بعدی
          </Button>
        </Link>
      </AntFooter>
    </Layout>
  );
};

export default PageThree;
