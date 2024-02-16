import PageTemplate from "../components/PageTemplate";
import Image from "../assets/six.jpeg";

const PageSix = () => {
  return (
    <PageTemplate
      linkTo="/seven"
      title="جایزه"
      image={Image}
      paragraphText="برخورد آتش و باد یک نور به شما جایزه می‌دهد."
    />
  );
};

export default PageSix;
