import PageTemplate from "../components/PageTemplate";
import Image from "../assets/eight.jpeg";

const PageEight = () => {
  return (
    <PageTemplate
      linkTo="/nine"
      title="عناصر روزانه"
      image={Image}
      paragraphText="هر روز ۲۰ عنصر برای بازی دریافت می‌کنید، ۵ عنصر از هرکدام"
    />
  );
};

export default PageEight;
