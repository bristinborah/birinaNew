import { useEffect, useState } from 'react';
import './Landing.scss'; // Import the CSS file
import Logo from './logo';

const Landing = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={`has-animation animation-ltr ${animate ? 'animate-in' : ''}`} data-delay="10">
      <div className="logo-container">
    <Logo />
  </div>
  <div className="text-container">
    <p className="landing">Welcome To&nbsp;<span className='landing-birina'>Birina</span></p>
  </div>
    </div>
  );
};

export default Landing;
