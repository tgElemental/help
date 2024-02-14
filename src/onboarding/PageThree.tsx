import { Link } from 'react-router-dom';
import ThreeImage from '../assets/three.jpeg';
const PageThree = () => {
  return (
    <div>
      <h1>راند</h1>
      <img src={ThreeImage} alt="Game"  className='mainimage'/>
      <p>در هر راند شما یک عنصر انتخاب می‌کنید، رقیب هم یک عنصر انتخاب می‌کند.</p>
      <Link to="/four">بعدی</Link>
    </div>
  );
};

export default PageThree;
