import { Link } from 'react-router-dom';
import EightImage from '../assets/eight.jpeg';
const PageEight = () => {
  return (
    <div>
      <h1>عناصر روزانه</h1>
      <img src={EightImage} alt="Game"  className='mainimage'/>
      <p>هر روز ۲۰ عنصر برای بازی دریافت می‌کنید، ۵ عنصر از هرکدام</p>
      <Link to="/nine">بعدی</Link>
    </div>
  );
};

export default PageEight;
