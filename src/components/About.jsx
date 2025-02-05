const About = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80")', // Futuristic tech background
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
          {/* Content */}
          <div className="relative text-center px-4">
            {/* Title with Glow Effect */}
            <h1 className="text-4xl md:text-6xl font-bold text-blue-500 font-futuristic mb-4 animate-float">
              About TECHNIX 6.0
            </h1>
  
            {/* Subtitle with Hogwarts Magic Effect */}
            <p className="text-lg md:text-xl text-blue-300 mb-8 animate-glow">
              Where Technology Meets Magic
            </p>
  
            {/* Description */}
            <div className="max-w-2xl mx-auto text-blue-200 text-sm md:text-base">
              <p className="mb-4">
                TECHNIX 6.0 is the ultimate convergence of cutting-edge technology and the enchanting world of magic. Inspired by the innovation of the tech industry and the wonder of Hogwarts, this event brings together the brightest minds to explore the future of technology.
              </p>
              <p className="mb-4">
                From AI-powered spellcasting to robotics enchanted with wizardry, TECHNIX 6.0 is a celebration of creativity, innovation, and the limitless possibilities of the digital age.
              </p>
              <p>
                Join us as we embark on a journey to redefine the boundaries of technology and magic!
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default About;