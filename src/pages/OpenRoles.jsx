import React from 'react';

const OpenRoles = () => {
  return (
    <div className="bg-gradient-to-r from-blue-950 to-green-950 py-10 ">
      <div className="container mx-auto text-white">
        <h1 className="text-4xl font-bold text-center mb-4">
          Explore Exciting Open Roles
        </h1>
        <p className="text-lg text-center mb-8">
          Join our dynamic team and help us shape the future of home repair and
          improvement.
        </p>
      </div>

      <div className="flex flex-wrap justify-center -mx-4">
        {/* Job 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Plumbing Specialist
            </h2>
            <p className="text-gray-600">
              Are you a skilled plumber? Join our team to provide top-notch
              plumbing solutions to our customers.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>
        {/* Job 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Electrical Engineer
            </h2>
            <p className="text-gray-600">
              Join us as an electrical engineer and work on cutting-edge
              electrical projects for our clients.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>
        {/* Job 3 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Gardening Expert
            </h2>
            <p className="text-gray-600">
              If you have a green thumb and a passion for gardening, we want you
              to join our gardening team.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>
        {/* Job 4 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Cleaner</h2>
            <p className="text-gray-600">
              Do you have an eye for detail and a passion for maintaining clean
              and organized spaces?
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>

        {/* Job 5 */}

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Painter</h2>
            <p className="text-gray-600">
              Are you skilled painter and can do magic while panting? 
              Join us and share your creativity with our clients.
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>


      {/* Job 6 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Carpenter</h2>
            <p className="text-gray-600">
              Do you have an eye for detail and a passion for maintaining clean
              and organized spaces?
            </p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
              Apply Now
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default OpenRoles;
