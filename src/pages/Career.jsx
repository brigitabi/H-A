import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
  return (
    <div className="text-black min-h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mt-7">
          Join Us in Shaping the Future of Technology
        </h1>
        <p className="mt-4 text-lg">
          We are looking for passionate individuals to be part of our team and
          enhance the homes and lives of our customers.
        </p>
        <p className="mt-4">
          <Link
            to="/career/open-roles"
            className="text-gray text-xl"
          >
            View open positions <span className='underline hover:opacity-40'> here.</span>
          </Link>
        </p>
      </div>

      <div className="ml-4 mr-8 bg-slate-100 ">
        <h2 className="text-3xl text-bold">Our core values are:</h2>
        <div className="grid grid-cols-3 gap-1 mt-4 text-xl">
          {/* Value 1 */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="hover:opacity-100 cursor-pointer z-10">
                <strong> Innovation and Impact </strong>
                We are dedicated to pioneering innovation that leaves a lasting,
                positive impact on the future of humanity. Our commitment is to
                create solutions that push the boundaries of what's possible and
                improve the lives of people worldwide. Anything that doesn't
                align with this vision is considered outside our scope.
              </p>
            </div>
          </div>

          {/* Value 2  */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <p className="hover:opacity-100 cursor-pointer z-10">
                <strong> Intense and Scrappy   </strong>
                We are dedicated to pioneering innovation that leaves a lasting,
                positive impact on the future of humanity. Our commitment is to
                create solutions that push the boundaries of what's possible and
                improve the lives of people worldwide. Anything that doesn't
                align with this vision is considered outside our scope.
              </p>
            </div>
          </div>

          {/* Value 3 */}
          
          <div>
            <strong>Scale:</strong> We believe that scale is magical. It extends
            not only to the size of our models, systems, and processes but also
            to our personal growth and ambitions. When faced with uncertainty,
            our instinct is to scale up, as it enables us to reach new heights
            and overcome challenges.
          </div>
          <div>
            <strong>Make Something People Love:</strong> We are driven by the
            aspiration to create technology and products that have a profoundly
            positive and transformative impact on people's lives. Our goal is to
            develop solutions that are not just functional but deeply loved by
            the individuals they serve.
          </div>
          <div>
            <strong>Team Spirit:</strong> Our greatest achievements and unique
            contributions stem from effective collaboration within and between
            teams. We take responsibility for solving problems and recognize
            that no issue is solely someone else's concern.
          </div>
          <div>
            <strong>True Flexibility:</strong> We promote an environment of true
            flexibility, offering the freedom for individuals to adapt to their
            unique work styles. Creative solutions often emerge when people have
            the autonomy to innovate and make decisions that drive progress.
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mt-8">
        <p className="text-2xl font-bold mb-4">When Dreams Become Reality</p>
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Collaboration"
          className="w-full h-[350px] rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Career;
