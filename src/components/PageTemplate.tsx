import { useNavigate } from "react-router-dom";
import WebApp from "@twa-dev/sdk";
import { Grid } from "antd-mobile";
import Typewriter from "typewriter-effect";
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
  const navigate = useNavigate();
  const handleClick = () => {
    if (linkTo === "/") {
      WebApp.openTelegramLink("https://t.me/ElementalGameBot");
    } else {
      navigate(linkTo);
    }
  };
  WebApp.MainButton.show();
  WebApp.MainButton.setText("بعدی");
  WebApp.MainButton.onClick(handleClick);
  return (
    <>
      <Grid columns={1} gap={8}>
        <Grid.Item>
          <h1>{title}</h1>
        </Grid.Item>
        <h5>{number} / ۹ </h5>
        <div className="image-container">
          <em-emoji id={emoji} size="10em"></em-emoji>
        </div>
        <Typewriter
          options={{
            strings: [paragraphText],
            autoStart: true,
            loop: false,
            delay: 75,
          }}
        />
      </Grid>
    </>
  );
};

export default PageTemplate;
