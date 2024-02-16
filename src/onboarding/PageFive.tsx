import PageTemplate from "../components/PageTemplate";
import Image from "../assets/five.jpg";

const PageFive = () => {
  return (
    <PageTemplate
      number="۵"
      linkTo="/six"
      title="امتیاز"
      image={Image}
      paragraphText="در حالت برنده ۳ امتیاز و در حالت مساوی ۱ امتیاز می‌گیرید."
    />
  );
};

export default PageFive;
