import { Link } from 'react-router-dom';
import ThreeImage from '../assets/three.jpeg';
const PageThree = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={ThreeImage} alt="Game"  className='mainimage'/>
      <p>آب، باد، زمین و آتش چهار عنصر اصلی و عمومی بازی هستند.</p>
      <Link to="/four">بعدی</Link>
    </div>
  );
};

export default PageThree;
