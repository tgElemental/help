import { Link } from "react-router-dom";
import { Button, Grid } from "antd-mobile";
import Typewriter from "typewriter-effect"; // Import the Typewriter component
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
init({ data });
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "em-emoji": any;
    }
  }
}

// Define the props type
interface PageTemplateProps {
  number: string;
  linkTo: string;
  title: string;
  paragraphText: string;
  emoji: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  emoji,
  number,
  linkTo,
  title,
  paragraphText,
}) => {
  return (
    <>
      <Grid columns={1} gap={8}>
        <Grid.Item>
          <h1>{title}</h1>
        </Grid.Item>
        <h5>{number} / ۹ </h5>
        <div className="image-container">
          <em-emoji id={emoji} size="10em"></em-emoji>
          {/* <Image
          src={image}
          alt={title}
          placeholder={<Skeleton />}
          className="mainimage"
          width={160}
          height={160}
          lazy
        /> */}
        </div>
        <Typewriter
          options={{
            strings: [paragraphText],
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
        <br />
        <Link to={linkTo} className="nextlink">
          <Button block color="primary" size="large">
            بعدی
          </Button>
        </Link>
      </Grid>
    </>
  );
};

export default PageTemplate;
