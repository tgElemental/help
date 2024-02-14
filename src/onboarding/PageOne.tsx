import { Link } from 'react-router-dom';
import OneImage from '../assets/one.jpeg';
const PageOne = () => {
  return (
    <div>
      <h1>بازی عناصر</h1>
      <img src={OneImage} alt="Game" className='mainimage'/>
      <p>بازی عناصر یک بازی ساده و بی‌دردسر است!</p>
      <Link to="/two" className='nextlink'>بعدی</Link>
    </div>
  );
};

export default PageOne;
