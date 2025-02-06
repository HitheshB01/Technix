const BGMI = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Event Title */}
      <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-6">
        BGMI Event
      </h1>

      {/* Logo Section */}
      <div className="flex justify-center mb-6">
        <img
          src="https://cdn-icons-png.flaticon.com/512/201/201623.png" // Logo URL
          alt="BGMI Logo"
          className="w-32 h-32 rounded-lg shadow-lg" // Adjusted size for mobile
        />
      </div>

      {/* Rules Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-yellow-500 font-magic mb-4">
          Rules
        </h2>
        <ul className="list-disc list-inside text-yellow-300 space-y-2">
          <li>Number of participants per team is 4.</li>
          <li>Per team registration fee is ₹300.</li>
          <li>
            Any foul play or cheating, including aim bot, game client
            modifications, exploiting bugs or glitches, will result in immediate
            disqualification of the team.
          </li>
          <li>
            Only iOS and Android mobile phones are allowed. Emulators and Tabs
            are strictly prohibited.
          </li>
          <li>
            Participants must be ready with their required accessories before
            joining the game.
          </li>
          <li>No Wi-Fi will be provided.</li>
          <li>Participants must bring their own chargers and headphones.</li>
          <li>
            Remote play is not allowed. All participants must be physically
            present.
          </li>
          <li>
            No arguments with the coordinators. The coordinator’s decision is
            final.
          </li>
          <li>Further instructions will be provided on the event day.</li>
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
              Santosh
            </h3>
            <a
              href="tel:+918660510372"
              className="text-yellow-300 hover:underline"
            >
              8660510372
            </a>{" "}
          </div>

          {/* Event Coordinator 2 */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/150" // Replace with Event Coordinator 2's image
              alt="Event Coordinator 2"
              className="w-24 h-24 rounded-full object-cover border-4 border-yellow-500 mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-500 font-magic">
              Kiran
            </h3>
            <a
              href="tel:+918618072614"
              className="text-yellow-300 hover:underline "
            >
              8618072614
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGMI;
