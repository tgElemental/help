import { Link } from 'react-router-dom';
import SixImage from '../assets/six.jpeg';
const PageSix = () => {
  return (
    <div>
      <h1>جایزه</h1>
      <img src={SixImage} alt="Game"  className='mainimage'/>
      <p>برخورد آتش و باد یک نور به شما جایزه می‌دهد.</p>
      <Link to="/seven">بعدی</Link>
    </div>
  );
};

export default PageSix;
