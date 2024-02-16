import { Link } from "react-router-dom";
import { Typography, Image, Layout, Button } from "antd";
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
  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Title>{title}</Title>
        <Image
          src={image}
          alt={title}
          placeholder
          preview={false}
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
