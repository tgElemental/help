import PageTemplate from "../components/PageTemplate";
import Image from "../assets/nine.jpg";

const PageNine = () => {
  return (
    <PageTemplate
      linkTo="/"
      title="دعوت دوستان"
      image={Image}
      paragraphText="بازی را به دوستان خود معرفی کنید و ۲۰ عنصر جدید برای خودتان بردارید!"
    />
  );
};

export default PageNine;
