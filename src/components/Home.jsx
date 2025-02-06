const Homepage = () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")', // Replace with your futuristic background
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  
          {/* Content */}
          <div className="relative text-center px-4">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 font-futuristic mb-4">
              Welcome to TECHNIX 6.0
            </h1>
  
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-yellow-300 mb-8">
              Where Innovation Meets the Future
            </p>
  
            {/* Call-to-Action Button */}
            <a
              href="/register"
              className="bg-yellow-500 text-gray-900 px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold hover:bg-yellow-400 transition duration-300"
            >
              Brochure
            </a>
          </div>
        </section>
      </div>
    );
  };
  
  export default Homepage;