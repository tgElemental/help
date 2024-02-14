import { Link } from 'react-router-dom';
import FiveImage from '../assets/five.jpeg';
const PageFive = () => {
  return (
    <div>
      <h1>امتیاز</h1>
      <img src={FiveImage} alt="Game"  className='mainimage'/>
      <p>در حالت برنده ۳ امتیاز و در حالت مساوی ۱ امتیاز می‌گیرید.</p>
      <Link to="/six">بعدی</Link>
    </div>
  );
};

export default PageFive;
