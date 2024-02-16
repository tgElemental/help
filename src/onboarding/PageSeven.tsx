import PageTemplate from "../components/PageTemplate";
import Image from "../assets/seven.jpg";

const PageSeven = () => {
  return (
    <PageTemplate
      number="۷"
      linkTo="/eight"
      title="جایزه"
      image={Image}
      paragraphText="برخورد زمین و آب یک درخت به شما جایزه می‌دهد."
    />
  );
};

export default PageSeven;
