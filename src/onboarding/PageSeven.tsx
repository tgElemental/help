import PageTemplate from "../components/PageTemplate";
import Image from "../assets/seven.jpeg";

const PageSeven = () => {
  return (
    <PageTemplate
      linkTo="/eight"
      title="جایزه"
      image={Image}
      paragraphText="برخورد زمین و آب یک درخت به شما جایزه می‌دهد."
    />
  );
};

export default PageSeven;
