import PageTemplate from "../components/PageTemplate";
import Image from "../assets/three.jpg";

const PageThree = () => {
  return (
    <PageTemplate
      number="۳"
      linkTo="/four"
      title="راند"
      image={Image}
      paragraphText="در هر راند شما یک عنصر انتخاب می‌کنید، رقیب هم یک عنصر انتخاب می‌کند."
    />
  );
};

export default PageThree;
