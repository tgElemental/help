import { Link } from 'react-router-dom';
import FiveImage from '../assets/five.jpeg';
const PageFive = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={FiveImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/six">بعدی</Link>
    </div>
  );
};

export default PageFive;
