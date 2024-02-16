import PageTemplate from "../components/PageTemplate";
import Image from "../assets/one.jpg";

const PageOne = () => {
  return (
    <PageTemplate
      number="۱"
      linkTo="/two"
      title="بازی  عناصر"
      image={Image}
      paragraphText="بازی  عناصر  یک  بازی  ساده  و  بی‌دردسر  است!"
    />
  );
};

export default PageOne;
