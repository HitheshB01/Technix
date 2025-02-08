import nikhila from "../coord_pic/nikhila.jpg";
import sid from "../coord_pic/sid.jpeg";
const Photography = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Event Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-6">
          Photography & Videography
        </h1>
  
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Replace with event logo
            alt="Photography & Videography Logo"
            className="w-32 h-32 rounded-lg shadow-lg"
          />
        </div>
  
        {/* Rules Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
            Rules
          </h2>
          <ul className="list-disc list-inside text-yellow-300 space-y-2">
            <li>Only mobile devices are allowed (any model).</li>
            <li>All captures (photos/videos) must be taken within the campus.</li>
            <li>
              <strong>Time Limits:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Photography: 2 hours per round, total 4 hours.</li>
                <li>Videography: 4 hours (including capturing and editing).</li>
              </ul>
            </li>
            <li>Use of old photos/videos or internet-downloaded content will result in disqualification.</li>
            <li>Participants must provide before and after shots for photos.</li>
            <li>Capture date and time will be verified in the device settings.</li>
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
        <div className="p-6 rounded-lg shadow-lg mb-6">
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
        <div className="p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
            Event Coordinators
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
            {/* Event Coordinator 1 */}
            <div className="flex flex-col items-center">
              <img
                src={sid} // Replace with Event Coordinator 1's image
                alt="Event Coordinator 1"
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-500 font-magic">
                Siddhanth
              </h3>
              <a
                href="tel:+919880231462"
                className="text-yellow-300 hover:underline"
              >
                8660187826
              </a>
            </div>
  
            {/* Event Coordinator 2 */}
            <div className="flex flex-col items-center">
              <img
                src="hjh" // Replace with Event Coordinator 2's image
                alt="Event Coordinator 2"
                className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
              />
              <h3 className="text-xl font-bold text-yellow-500 font-magic">
                Tejaswini
              </h3>
              <a
                href="tel:+918904291356"
                className="text-yellow-300 hover:underline"
              >
                8904291356
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Photography;
