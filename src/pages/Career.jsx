import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const Career = () => {
  return (
    <div className="text-black min-h-screen flex flex-col items-center justify-center bg-[#f8f4f4]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mt-7">
          Join Us in Shaping the Future of Technology
        </h1>
        <p className="mt-4 text-lg">
          We are looking for passionate individuals to be part of our team and
          enhance the homes and lives of our customers.
        </p>
        <p className="mt-4">
          <Link to="/career/open-roles" className="text-gray text-xl">
            View open positions{' '}
            <span className="underline hover:opacity-40"> here.</span>
          </Link>
        </p>
      </div>

      <div className="bg-white max-w-[900px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          alt="Collaboration"
          className="w-full h-[350px] rounded-lg shadow-md pl-4"
        />
        <img
          src="https://images.unsplash.com/photo-1529310399831-ed472b81d589?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Collaboration"
          className="w-full h-[350px] rounded-lg shadow-md"
        />
        <img
          src="https://images.unsplash.com/photo-1635185481431-661b09594e6c?auto=format&fit=crop&q=80&w=2127&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Collaboration"
          className="w-full h-[350px] rounded-lg shadow-md"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-max-[250px] mt-4">
        <h2 className="col-span-3 ml-6 text-2xl font-bold text-center underline">
          Our core values are
        </h2>

        {/* Value 1 */}

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold underline">Innovation and Impact</p>
          <p className="pt-2}">
            We are dedicated to pioneering innovation that leaves a lasting,
            positive impact on the future of humanity. Our commitment is to
            create solutions that push the boundaries of what's possible and
            improve the lives of people worldwide. Anything that doesn't align
            with this vision is considered outside our scope.
          </p>
        </div>

        {/* Value 2  */}

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold">Intense and Scrappy</p>
          <p className="pt-2">
            We are dedicated to pioneering innovation that leaves a lasting,
            positive impact on the future of humanity. Our commitment is to
            create solutions that push the boundaries of what's possible and
            improve the lives of people worldwide. Anything that doesn't align
            with this vision is considered outside our scope.
          </p>
        </div>

        {/* Value 3 */}

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold">Scale </p>
          <p className="pt-2">
            We believe that scale is magical. It extends not only to the size of
            our models, systems, and processes but also to our personal growth
            and ambitions. When faced with uncertainty, our instinct is to scale
            up, as it enables us to reach new heights and overcome challenges.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold">Make something people love </p>
          <p className="pt-2">
            We are driven by the aspiration to create technology and products
            that have a profoundly positive and transformative impact on
            people's lives. Our goal is to develop solutions that are not just
            functional but deeply loved by the individuals they serve.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold">Team Spirit </p>
          <p className="pt-2">
            Our greatest achievements and unique contributions stem from
            effective collaboration within and between teams. We take
            responsibility for solving problems and recognize that no issue is
            solely someone else's concern.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-lg shadow-blue-500">
          <p className="font-bold">True Flexibility </p>
          <p className="pt-2">
            We promote an environment of true flexibility, offering the freedom
            for individuals to adapt to their unique work styles. Creative
            solutions often emerge when people have the autonomy to innovate and
            make decisions that drive progress.
          </p>
        </div>
        <div className="p-10 text-xl font-bold text-center">
          <div className="pt-8">
            <p>Our office in Amsterdam </p>
            <div className="flex space-x-3 space-between ml-8 mt-4">
              <img
                className="h-max[250px] rounded-md"
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="office"
              />
              <img
                className="h-max[250px] rounded-md"
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="office"
              />
              <img
                className="h-max[250px] rounded-md"
                src="https://images.unsplash.com/photo-1575886876783-ea3cbbc8204d?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="office"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center font-bold">
          Hire & Admire LLC. All rights reseved. Created for learning purposes.
          Images obtained on Unsplash.{' '}
        </p>
      </div>
    </div>
  );
};

export default Career;
