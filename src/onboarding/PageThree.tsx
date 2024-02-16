import PageTemplate from "../components/PageTemplate";
import Image from "../assets/three.jpeg";

const PageThree = () => {
  return (
    <PageTemplate
      linkTo="/four"
      title="راند"
      image={Image}
      paragraphText="در هر راند شما یک عنصر انتخاب می‌کنید، رقیب هم یک عنصر انتخاب می‌کند."
    />
  );
};

export default PageThree;
