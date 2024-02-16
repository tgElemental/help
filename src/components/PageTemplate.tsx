import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image, Layout, Button, Spin } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { layoutStyle, contentStyle, footerStyle } from "../components/Styling";

// Define the props type
interface PageTemplateProps {
  linkTo: string;
  title: string;
  image: string;
  paragraphText: string;
}

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
        <h1>{title}</h1>
        {isLoading && <Spin />}
        <Image
          src={image}
          alt="Game"
          placeholder={<Spin />}
          onError={() => console.error("Failed to load image")}
          onLoad={handleImageLoad}
          className="mainimage"
        />
        <p>{paragraphText}</p>
      </Content>
      <Footer style={footerStyle}>
        <Link to={linkTo} className="nextlink">
          <Button type="primary" size="large" block shape="round">
            بعدی
          </Button>
        </Link>
      </Footer>
    </Layout>
  );
};

export default PageTemplate;
