import { Link } from 'react-router-dom';
import SixImage from '../assets/six.jpeg';
const PageSix = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={SixImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/seven">بعدی</Link>
    </div>
  );
};

export default PageSix;
