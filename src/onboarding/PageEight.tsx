import PageTemplate from "../components/PageTemplate";
import Image from "../assets/eight.jpg";

const PageEight = () => {
  return (
    <PageTemplate
      number="۸"
      linkTo="/nine"
      title="عناصر روزانه"
      image={Image}
      paragraphText="هر روز ۲۰ عنصر برای بازی دریافت می‌کنید، ۵ عنصر از هرکدام"
    />
  );
};

export default PageEight;
