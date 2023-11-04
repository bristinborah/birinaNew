
import './App.scss'
import Factory from './sections/factory/Factory';
import Landing from './sections/landing/Landing';
import LandingGamosa from './sections/landingGamosa/LandingGamosa';
import AnimatedMapComponent from './sections/Location/Map';

function App() {

  return (
    <>
      <div className="app-container">
      <Landing />
      <LandingGamosa gamosaID="101" />
      <AnimatedMapComponent />
      <Factory />
    </div>
    </>
  )
}

export default App
