import { Link } from 'react-router-dom';
import FourImage from '../assets/four.jpeg';
const PageFour = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={FourImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/five">بعدی</Link>
    </div>
  );
};

export default PageFour;
