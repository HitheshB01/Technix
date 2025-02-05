const Coding = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Event Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-6">
          Coding Event
        </h1>
  
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Replace with your Coding event logo
            alt="Coding Logo"
            className="w-32 h-32 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Rules Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
            Rules
          </h2>
          <ul className="list-disc list-inside text-yellow-300 space-y-2">
            <li>Members Per Team: 1</li>
            <li>Event Consists of 3 Rounds</li>
            <li>Knowledge of C, C++, or Java is mandatory</li>
            <li>Participants indulging in malpractice will be disqualified</li>
            <li>
              The challenges for each round will be revealed a few minutes before
              it begins
            </li>
            <li>Sheets of paper will be provided if necessary</li>
            <li>PCs will be provided</li>
            <li>No electronic gadgets are allowed</li>
          </ul>
        </div>
  
        {/* Register Button */}
        <div className="text-center mb-6">
          <a
            href="/register"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
          >
            Register Now
          </a>
        </div>
  
        {/* Event Coordinators Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
            Event Coordinators
          </h2>
          <ul className="text-yellow-300 space-y-2">
            <li>
              <strong>John Doe</strong> - +91 12345 67890
            </li>
            <li>
              <strong>Jane Smith</strong> - +91 98765 43210
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Coding;