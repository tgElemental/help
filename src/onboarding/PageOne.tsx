import { Link } from "react-router-dom";
import { Flex, Image, Layout, Button, Spin } from "antd";
import OneImage from "../assets/one.jpeg";
import { useState } from "react";
import { Content, Footer } from "antd/es/layout/layout";
import {
  layoutStyle,
  contentStyle,
  footerStyle,
  flexStyle,
} from "../components/Styling";
const PageOne = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <Flex style={flexStyle}>
      <Layout style={layoutStyle}>
        <Content style={contentStyle}>
          <h1>دعوت دوستان</h1>
          {isLoading && <Spin />}
          <Image
            src={OneImage}
            alt="Game"
            placeholder={<Spin />}
            onError={() => console.error("Failed to load image")}
            onLoad={handleImageLoad}
            className="mainimage"
          />
          <p>بازی عناصر یک بازی ساده و بی‌دردسر است!</p>
        </Content>
        <Footer style={footerStyle}>
          <Link to="/two" className="nextlink">
            <Button type="primary" size="large" block>
              بعدی
            </Button>
          </Link>
        </Footer>
      </Layout>
    </Flex>
  );
};

export default PageOne;
