const Sponsor = () => {
    // Sponsor Data
    const sponsors = [
      {
        id: 1,
        name: 'Tech Innovators',
        logo: 'https://via.placeholder.com/150', // Replace with sponsor logo URL
        description:
          'Tech Innovators is a leading provider of cutting-edge technology solutions, empowering businesses to thrive in the digital age.',
        location: 'San Francisco, USA',
      },
      {
        id: 2,
        name: 'Code Wizards',
        logo: 'https://via.placeholder.com/150', // Replace with sponsor logo URL
        description:
          'Code Wizards specializes in software development and AI solutions, transforming ideas into reality.',
        location: 'New York, USA',
      },
      {
        id: 3,
        name: 'Pixel Perfect',
        logo: 'https://via.placeholder.com/150', // Replace with sponsor logo URL
        description:
          'Pixel Perfect is a creative agency that delivers stunning designs and user experiences for the modern world.',
        location: 'London, UK',
      },
      // Add more sponsors here...
    ];
  
    return (
      <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-yellow-500 font-magic text-center mb-8">
          Our Sponsors
        </h1>
  
        {/* Sponsors Grid */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className=" p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 "
              >
                {/* Sponsor Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} Logo`}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
  
                {/* Sponsor Name */}
                <h2 className="text-2xl font-bold text-yellow-500 font-magic text-center mb-4">
                  {sponsor.name}
                </h2>
  
                {/* Sponsor Description */}
                <p className="text-yellow-300 text-center mb-4">
                  {sponsor.description}
                </p>
  
                {/* Sponsor Location */}
                <p className="text-yellow-500 text-center">
                  <strong>Location:</strong> {sponsor.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sponsor;