import shiv from '../coord_pic/shiv.jpeg';
const AdvisoryPanel = () => {
  // Advisory Panel Members Data
  const panelMembers = [
    {
      id: 1,
      name: 'Dr. M Sridevi',
      role: 'HOD, Department of Computer Science',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Dr. T Shivakumara',
      role: 'Faculty Coordinator',
      image: shiv, // Replace with actual image URL
    },
    // {
    //   id: 3,
    //   name: 'Dr. Alice Johnson',
    //   role: 'Faculty Coordinator',
    //   image: 'https://via.placeholder.com/150', // Replace with actual image URL
    // },
    // {
    //   id: 4,
    //   name: 'Prof. Robert Brown',
    //   role: 'Faculty Coordinator',
    //   image: 'https://via.placeholder.com/150', // Replace with actual image URL
    // },
  ];

  return (
    <div className="min-h-screen  text-white p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
        Advisory Panel
      </h1>

      {/* Panel Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {panelMembers.map((member) => (
          <div
            key={member.id}
            className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Member Image */}
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-yellow-500"
              />
            </div>

            {/* Member Name */}
            <h2 className="text-2xl font-bold text-yellow-500 font-magic text-center mb-2">
              {member.name}
            </h2>

            {/* Member Role */}
            <p className="text-yellow-300 text-center">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisoryPanel;