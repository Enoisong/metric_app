import { Link } from 'react-router-dom';
import back from './image/ba.png';
import microphone from './image/bd.png';
import setting from './image/be.png';

const Header = () => (
  <div className="top-header">
    <Link to="/"><img src={back} alt="Back Icon" className="back-im" /></Link>
    <h1>Population Metrics</h1>
    <div className="right-icon">
      <img src={microphone} alt="Microphone icon" />
      <img src={setting} alt="Setting icon" className="set-img" />
    </div>
  </div>
);

export default Header;
