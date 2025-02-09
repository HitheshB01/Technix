// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Container from './components/Container'; // Import the Container component
// import BGMI from './festEvents/BGMI'; // Import the BGMI component
// import Coding from './festEvents/Coding';
// import ITQuiz from './festEvents/ITQuiz';
// import WebDesign from './festEvents/WebDesign';
// import TreasureHunt from './festEvents/TreasureHunt';
// import ITManager from './festEvents/ITManager';
// import SurpriseEvent from './festEvents/SurpriseEvent';
// import Photo from './festEvents/Photography'

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* Home Page with Navbar, Homepage, EventSection, and Footer */}
//         <Route path="/" element={<Container/>} />

//         {/* BGMI Page (Replaces EventSection) */}
//         <Route path="/events/bgmi" element={<Container content={<BGMI />} />} />
//         <Route path="/events/coding" element={<Container content={<Coding/>} />} />
//         <Route path="/events/itQuiz" element={<Container content={<ITQuiz/>} />} />
//         <Route path="/events/webDesign" element={<Container content={<WebDesign/>} />} />
//         <Route path="/events/treasureHunt" element={<Container content={<TreasureHunt/>} />} />
//         <Route path="/events/itManager" element={<Container content={<ITManager/>} />} />
//         <Route path="/events/surpriseEvent" element={<Container content={<SurpriseEvent/>} />} />
//         <Route path="/events/photography" element={<Container content={<Photo/>} />} />




//         {/* Add more routes for other events if needed */}
//         {/* Example: <Route path="/events/it-quiz" element={<Container content={<ITQuiz />} />} /> */}
//       </Routes>
//     </Router>
//   );
// };

// export default App;

import React from 'react'
import Navbar from './exp-component/Navbar'
import HeroSection from './exp-component/HeroSection'
import AboutCollege from './exp-component/AboutCollege'
import AboutTechnix from './exp-component/AboutTechnix'
import EventSection from './exp-component/EventSection'
import EventDetailPage from './exp-component/EventDetailPage'
import Container from './exp-component/Container'
import { BrowserRouter as Router } from 'react-router-dom';


const App = () => {
  return (
    <div>
      {/* <Navbar/>
      <HeroSection/>
      <AboutCollege/>
      <AboutTechnix/>
      <EventSection/>
      <EventDetailPage/> */}
      {/* <Router> */}
      <Container />
    {/* </Router>    */}
     </div>
  )
}

export default App
