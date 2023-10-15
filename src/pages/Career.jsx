import React from 'react';

const Career = () => {
  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      <div
        className="max-w-[1400px] h-[1450px] mx-auto my-20 pt-16 rounded-md
    -z-50 relative"
      >
        <div
          className="w-[1500px] h-[1450px] blur-xl -z-10 absolute top-0 left-0 bg-gradient-to-br
        from-gray-600/50
        to-[#AFDBF5]"
        />
        <div className="flex justify-center z-10">
          <div className="">
            <p className="text-black font-bold text-center text-3xl">
              Come be a part of molding the technological landscape{' '}
              <span>of tomorrow with us.</span>
            </p>
          </div>
          <div className="flex justify-end text-white mr-0">
            <p className="text-gray-900 font-bold">
              Providing high-quality home repair services demands a diverse team
              of skilled professionals from various trades and backgrounds.
              We're continually seeking passionate individuals to be a part of
              our team, dedicated to enhancing the homes and lives of our
              customers.
              <p className="mt-8 text-black">
                View all{' '}
                <span className="underline text-white">open roles</span>
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-between py-20">
          <p className="font-bold text-2xl">When dreams become a reality!</p>
          <img
            className="top-0 left-0 w-[1100px] h-[450px] object-cover rounded-lg"
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt="colloboration"
          />
        </div>
      </div>
    </div>
  );
};

export default Career;
