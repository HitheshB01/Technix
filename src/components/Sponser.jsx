import viva from '../images/logo_vivatech.png';

const Sponsor = () => {
    // Sponsor Data
    const sponsors = [
      {
        id: 1,
        name: ' Viva Tech',
        logo: viva, // Replace with sponsor logo URL
        description:
          'Viav Production specializes in innovative visual storytelling, creating captivating videos and photography that elevate brand identity.',
        website: 'https://vivas.co.in/index.php', // Replace with sponsor website URL
      },
    //   {
    //     id: 2,
    //     name: 'Code Wizards',
    //     logo: 'https://via.placeholder.com/150', // Replace with sponsor logo URL
    //     description:
    //       'Code Wizards specializes in software development and AI solutions, transforming ideas into reality.',
    //     website: 'https://codewizards.com', // Replace with sponsor website URL
    //   },
    //   {
    //     id: 3,
    //     name: 'Pixel Perfect',
    //     logo: 'https://via.placeholder.com/150', // Replace with sponsor logo URL
    //     description:
    //       'Pixel Perfect is a creative agency that delivers stunning designs and user experiences for the modern world.',
    //     website: 'https://pixelperfect.com', // Replace with sponsor website URL
    //   },
      // Add more sponsors here...
    ];
  
    return (
      <div className="min-h-screen text-white py-12 px-4">
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
  
                {/* Sponsor Name with Link */}
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-2xl font-bold text-yellow-500 font-magic text-center mb-4 hover:text-yellow-400 transition duration-300"
                >
                  {sponsor.name}
                  {/* External Link Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
  
                {/* Sponsor Description */}
                <p className="text-yellow-300 text-center mb-4">
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Sponsor;