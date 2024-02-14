import { Link } from 'react-router-dom';
import SevenImage from '../assets/seven.jpeg';
const PageSeven = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={SevenImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/eight">بعدی</Link>
    </div>
  );
};

export default PageSeven;
