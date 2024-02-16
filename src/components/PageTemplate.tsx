import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typography, Image, Layout, Button, Spin } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { CaretRightOutlined } from "@ant-design/icons";
import { layoutStyle, contentStyle, footerStyle } from "../components/Styling";

// Define the props type
interface PageTemplateProps {
  linkTo: string;
  title: string;
  image: string;
  paragraphText: string;
}
const { Title } = Typography;

// Use the props type in your component
const PageTemplate: React.FC<PageTemplateProps> = ({
  linkTo,
  title,
  image,
  paragraphText,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Title>{title}</Title>
        {isLoading && <Spin />}
        <Image
          src={image}
          alt="Game"
          placeholder={<Spin />}
          onError={() => console.error("Failed to load image")}
          onLoad={handleImageLoad}
          className="mainimage"
        />
        <Title level={5}>{paragraphText}</Title>
      </Content>
      <Footer style={footerStyle}>
        <Link to={linkTo} className="nextlink">
          <Button
            type="primary"
            size="large"
            block
            icon={<CaretRightOutlined />}
          >
            بعدی
          </Button>
        </Link>
      </Footer>
    </Layout>
  );
};

export default PageTemplate;
