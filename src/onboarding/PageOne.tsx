import { Link } from 'react-router-dom';
import GameImage from '../assets/game.png';
const PageOne = () => {
  return (
    <div>
      <h1>بازی عناصر</h1>
      <img src={GameImage} alt="Game" className='mainimage'/>
      <p>بازی عناصر یک بازی ساده و بی‌دردسر است!</p>
      <Link to="/two">بعدی</Link>
    </div>
  );
};

export default PageOne;
