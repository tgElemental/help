import { Link } from 'react-router-dom';
import NineImage from '../assets/nine.jpeg';
const PageNine = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={NineImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/">بعدی</Link>
    </div>
  );
};

export default PageNine;
