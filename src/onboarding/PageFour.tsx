import PageTemplate from "../components/PageTemplate";
import Image from "../assets/four.jpg";

const PageFour = () => {
  return (
    <PageTemplate
      number="۴"
      linkTo="/five"
      title="نتیجه"
      image={Image}
      paragraphText="بر اساس قدرت عنصری که بازی کردید، برنده، مساوی یا بازنده می‌شوید."
    />
  );
};

export default PageFour;
