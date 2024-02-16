import PageTemplate from "../components/PageTemplate";
import Image from "../assets/two.jpg";

const PageTwo = () => {
  return (
    <PageTemplate
      number="۲"
      linkTo="/three"
      title="عناصر"
      image={Image}
      paragraphText="آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند."
    />
  );
};

export default PageTwo;
