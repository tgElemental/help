import { Link } from 'react-router-dom';
import NineImage from '../assets/nine.jpeg';
const PageNine = () => {
  return (
    <div>
      <h1>عناصر</h1>
      <img src={NineImage} alt="Game"  className='mainimage'/>
      <p>بازی را به دوستان خود معرفی کنید و ۲۰ عنصر جدید برای خودتان بردارید!</p>
      <Link to="/">بعدی</Link>
    </div>
  );
};

export default PageNine;
