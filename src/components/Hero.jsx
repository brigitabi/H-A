import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80"
        alt="background"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <h1 className="font-bold text-3xl md:text-6xl drop-shadow-2xl mt-8">
            Looking to discover how to create a better, more efficient and
            pleasant living environment?
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl mt-10">
            Connecting you to the best professionals ~ Begin your journey here. 
          </p>
          <button className='bg-white text-black mt-4'> Hire & Admire Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
