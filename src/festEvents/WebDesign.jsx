const WebDesign = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Event Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-6">
          Web Designing
        </h1>
  
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Replace with your Web Designing event logo
            alt="Web Designing Logo"
            className="w-32 h-32 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Rules Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
            Rules
          </h2>
          <ul className="list-disc list-inside text-yellow-300 space-y-2">
            <li>Members Per Team: 2</li>
            <li>Event Consists of 3 Rounds</li>
            <li>
              Results will be determined based on cumulative scoring across all
              rounds
            </li>
            <li>
              Participants must install the required software before the event
            </li>
            <li>
              Allowed software includes Canva, Figma, Adobe Photoshop, Adobe
              Illustrator, and VSCode (other preferred editors must be approved by
              the coordinators)
            </li>
            <li>
              Some rounds will focus on HTML, CSS, and JavaScript; external code
              references are not allowed
            </li>
            <li>Participants must bring their own devices and chargers</li>
            <li>The event schedule must be followed strictly</li>
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
  
        {/* Faculty Coordinator Section */}
      <div className=" p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
          Faculty Coordinator
        </h2>
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/150" // Replace with Faculty Coordinator's image
            alt="Faculty Coordinator"
            className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
          />
          <h3 className="text-xl font-bold text-yellow-500 font-magic">
          Mr. Dwarakanth G V
          </h3>
          <p className="text-yellow-300">Faculty Coordinator</p>
        </div>
      </div>

      {/* Event Coordinators Section */}
      <div className=" p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
          Event Coordinators
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {/* Event Coordinator 1 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with Event Coordinator 1's image
              alt="Event Coordinator 1"
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-500 font-magic">
              Gaurang
            </h3>
            <a
              href="tel:+917339722954"
              className="text-yellow-300 hover:underline "
            >
              +91 7339722954
            </a>          </div>

          {/* Event Coordinator 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with Event Coordinator 2's image
              alt="Event Coordinator 2"
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-500 font-magic">
              Varshini
            </h3>
            <a
              href="tel:+919535907059"
              className="text-yellow-300 hover:underline "
            >
              +91 9535907059
            </a>          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default WebDesign;