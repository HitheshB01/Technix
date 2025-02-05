import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import Homepage from './Home'; // Import the Homepage component
import EventSection from './Events'; // Import the EventSection component
import Footer from './Footer'; // Import the Footer component
import About from './About';
import GeneralRules from './GeneralRules';
import AdvisoryPanel from './AdvisoryPanel';
import Coordinator from './Coordinator';

const Container = ({ content }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {content || ( // Render the content prop if provided, otherwise render Homepage and EventSection
          <>
            <Homepage />
            <About/>
            <GeneralRules/>
            <EventSection />
            <AdvisoryPanel/>
            <Coordinator/>
          </>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Container;