import { Link } from 'react-router-dom';
import FourImage from '../assets/four.jpeg';
const PageFour = () => {
  return (
    <div>
      <h1>نتیجه</h1>
      <img src={FourImage} alt="Game"  className='mainimage'/>
      <p>بر اساس قدرت عنصری که بازی کردید، برنده، مساوی یا بازنده می‌شوید.</p>
      <Link to="/five">بعدی</Link>
    </div>
  );
};

export default PageFour;
