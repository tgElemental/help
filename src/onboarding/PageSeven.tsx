import { Link } from 'react-router-dom';
import SevenImage from '../assets/seven.jpeg';
const PageSeven = () => {
  return (
    <div>
      <h1>جایزه</h1>
      <img src={SevenImage} alt="Game"  className='mainimage'/>
      <p>برخورد زمین و آب یک درخت به شما جایزه می‌دهد.</p>
      <Link to="/eight">بعدی</Link>
    </div>
  );
};

export default PageSeven;
