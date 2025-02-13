import shreya from '../coord_pic/shreya.jpeg';
import hithesh from '../coord_pic/hithu.jpeg';
const Coordinator = () => {
    // Coordinators Data
    const coordinators = [
      {
        id: 1,
        name: 'Hithesh',
        role: 'Event Coordinator',
        contact: '+919901767545',
        image: hithesh, // Replace with actual image URL
      },
      {
        id: 2,
        name: 'Shreya',
        role: 'Event Coordinator',
        contact: '+918762635749',
        image: shreya, // Replace with actual image URL
      },
    ];
  
    return (
      <div className="min-h-[60vh]  text-white p-6">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
          Head Coordinators
        </h1>
  
        {/* Coordinators Grid */}
        <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
          {coordinators.map((coordinator) => (
            <div
              key={coordinator.id}
              className=" p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Coordinator Image */}
              <div className="flex justify-center mb-2">
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-yellow-500"
                />
              </div>
  
              {/* Coordinator Name */}
              <h2 className="text-lg font-bold text-yellow-500 font-magic text-center mb-1">
                {coordinator.name}
              </h2>
  
              {/* Coordinator Role */}
              <p className="text-sm text-yellow-300 text-center mb-1">
                {coordinator.role}
              </p>
  
              {/* Coordinator Contact */}
              <div className="text-center">
                <a
                  href={`tel:${coordinator.contact}`} // Directly dial the contact number
                  className="text-sm text-blue-400 hover:underline"
                >
                  {coordinator.contact}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Coordinator;