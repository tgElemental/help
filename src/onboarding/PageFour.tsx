import PageTemplate from "../components/PageTemplate";
import Image from "../assets/four.jpeg";

const PageFour = () => {
  return (
    <PageTemplate
      linkTo="/five"
      title="نتیجه"
      image={Image}
      paragraphText="بر اساس قدرت عنصری که بازی کردید، برنده، مساوی یا بازنده می‌شوید."
    />
  );
};

export default PageFour;
