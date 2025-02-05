const GeneralRules = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
          General Rules
        </h1>
  
        {/* Rules List */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <ul className="list-decimal list-inside text-yellow-300 space-y-4">
            <li>Participants must carry a valid college ID card.</li>
            <li>Registration fees are non-refundable.</li>
            <li>
              Any form of misbehavior or indiscipline will result in
              disqualification.
            </li>
            <li>
              Participants must bring their own electronic devices. The
              organizing team will not provide any gadgets.
            </li>
            <li>
              Detailed event instructions will be given by the respective event
              coordinators before the event.
            </li>
            <li>
              Since all events are held on campus, participants’ presence on
              campus is mandatory.
            </li>
            <li>The judges' decision is final.</li>
            <li>
              The college will not be responsible for any loss of valuables or
              personal belongings.
            </li>
            <li>Individual Events: Maximum 3 participants per college.</li>
            <li>Group Events: Maximum 2 teams per college.</li>
            <li>Only MCA and BCA students are allowed to participate.</li>
            <li>No accommodation will be provided.</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default GeneralRules;