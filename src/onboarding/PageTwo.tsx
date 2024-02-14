import { Link } from 'react-router-dom';
import TwoImage from '../assets/two.jpeg';
const PageTwo = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={TwoImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/three">بعدی</Link>
    </div>
  );
};

export default PageTwo;
