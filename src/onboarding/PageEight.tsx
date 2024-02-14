import { Link } from 'react-router-dom';
import EightImage from '../assets/eight.jpeg';
const PageEight = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={EightImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/nine">بعدی</Link>
    </div>
  );
};

export default PageEight;
