import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './LandingGamosa.scss'; // Import the CSS file

const LandingGamosa = ({ gamosaID }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setAnimate(true);
  }, []);

  return (
    <div className={`has-animation-gamosa animation-rtl ${animate ? 'animate-in' : ''}`} data-delay="10">
      <p className="landingGamosa">Lets Explore The Story Of Gamosa&nbsp;<span className='landingGamosa-birina'>{gamosaID}</span></p>
    </div>

  );
};
LandingGamosa.propTypes = {
  gamosaID: PropTypes.string.isRequired, // Define the prop type and mark it as required
};
export default LandingGamosa;
