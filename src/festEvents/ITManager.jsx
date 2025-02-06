
import img from '../images/Picsart_25-02-06_11-43-23-500.png'
const ITManager = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Event Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-6">
          IT Manager
        </h1>
  
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <img
            src={img} // Replace with your IT Manager event logo
            alt="IT Manager Logo"
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
            <li>Event Consists of multiple Rounds</li>
            <li>
              Participants must carry a smartphone but can use it only when
              instructed
            </li>
            <li>Details of each round will be disclosed on the spot</li>
            <li>Participants cannot participate in other events</li>
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
            Mrs. Nirupama B K
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
              Keith Swamy
            </h3>
            <a
              href="tel:+91725985841"
              className="text-yellow-300 hover:underline "
            >
              725985841
            </a>          </div>

          {/* Event Coordinator 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with Event Coordinator 2's image
              alt="Event Coordinator 2"
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-500 font-magic">
              Abhishek
            </h3>
            <a
              href="tel:+918088594273"
              className="text-yellow-300 hover:underline "
            >
              8088594273
            </a>          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default ITManager;