import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import customIconUrl from '/gamosa.png';
import './Map.scss'; // Import the CSS file

const MapComponent = ({ latitude, longitude }) => {
  const mapRef = useRef(null); // Use a ref to store the map instance

  useEffect(() => {
    if (!mapRef.current) {
      // Create a map only if it doesn't exist
      const map = L.map('map').setView([latitude, longitude], 13);
      const customIcon = L.icon({
        iconUrl: customIconUrl, // Path to your custom icon image
        iconSize: [70, 70], // Size of the icon
        iconAnchor: [0, 70], // Anchor point of the icon (centered at the bottom)
      });
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
      L.marker([latitude, longitude], { icon: customIcon }).addTo(map);
      mapRef.current = map; // Store the map instance in the ref
    } else {
      // Update the map's center if it already exists
      mapRef.current.setView([latitude, longitude], 13);
    }
  }, [latitude, longitude]);

  return (
    <div className='location'>
    <p className="mapLocation">Your Gamosa Came From</p>
    <p className="mapLocationNFT">Merapani, Golaghat</p>
    <div id="map" className="map-container"></div>
  </div>
  )
};

MapComponent.propTypes = {
    latitude: PropTypes.string.isRequired, // Define the prop type and mark it as required
    longitude: PropTypes.string.isRequired, // Define the prop type and mark it as required
  };

  const AnimatedMapComponent = () => {
    const [animate, setAnimate] = useState(false);
  
    useEffect(() => {
      // Trigger animation after component mounts
      setAnimate(true);
    }, []);
  
    return (
      <div className={`has-animation-map animation-ltr ${animate ? 'animate-in' : ''}`} data-delay="10">
        <MapComponent latitude="26.5239" longitude="93.9623" />
      </div>
    );
  };
  
  export default AnimatedMapComponent;