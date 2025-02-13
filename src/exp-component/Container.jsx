import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutCollege from "./AboutCollege";
import AboutTechnix from "./AboutTechnix";
import EventSection from "./EventSection";

// Import all event components from the eventslist folder
import BGMI from "../eventslist/Bgmi.jsx";
import Coding from "../eventslist/Coding.jsx";
import ITQuiz from "../eventslist/Quiz.jsx";
import WebDesign from "../eventslist/Web.jsx";
import TreasureHunt from "../eventslist/Treasure.jsx";
import SurpriseEvent from "../eventslist/Surprise.jsx";
import Photography from "../eventslist/Photo.jsx";
import ITManager from "../eventslist/ItManager.jsx";
import AdvisoryPanel from "./Advisorypanel.jsx";
import StudentCoordinators from "./StudentCoordinators.jsx";
import Footer from "./Footer.jsx";
import RulesPage from "./RulesPage.jsx";
import SponsorsPage from "./SponsersPage.jsx";
import EventSchedule from "./EventSchedule.jsx";
import DesignCommittee from "./DesignCommittee.jsx";

// Event ID to Component Mapping
const eventRoutes = [
  { path: "bgmi", Component: BGMI },
  { path: "coding", Component: Coding },
  { path: "itQuiz", Component: ITQuiz },
  { path: "webDesign", Component: WebDesign },
  { path: "treasureHunt", Component: TreasureHunt },
  { path: "surpriseEvent", Component: SurpriseEvent },
  { path: "photography", Component: Photography },
  { path: "itManager", Component: ITManager },
];

const Container = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <AboutCollege />
              <AboutTechnix />
              <RulesPage/>
              <EventSection />
              <EventSchedule/>
              <AdvisoryPanel/>
              <StudentCoordinators/>
              {/* <DesignCommittee/> */}
              <SponsorsPage/>
            </>
          }
        />

        {/* Event Pages - Dynamic Routing */}
        {eventRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={`/events/${path}`} element={<Component />} />
        ))}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default Container;
