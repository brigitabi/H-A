import React from 'react';

const Interior = () => {
  return (
    <div className="max-w-[1400px] h-[1450px] bg-gray-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 rounded-md">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Interior Homme Repair</h3>
        <p className="pt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
          ipsa sint eum velit quis id.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2 ">
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://images.unsplash.com/photo-1506619956381-26a36a943b27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2784&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full rounded-full"
          src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsZWFuaW5nJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full rounded-full"
          src="https://images.unsplash.com/photo-1585128903994-9788298932a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhhcmR3b29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Interior;
