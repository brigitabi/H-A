import React from 'react';

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* left side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-90"
          src="https://plus.unsplash.com/premium_photo-1683127814960-3a97c4f0d882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbWUlMjBlbGVjdHJpY2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 hover:scale-90"
          src="https://images.unsplash.com/photo-1497990571654-77aa8ec36038?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2 hover:scale-90"
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMG1haW50ZW5hbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2 hover:scale-90"
          src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-center w-full h-full p-2 hover:scale-90"
          src="https://images.unsplash.com/photo-1584717900604-56cd6daf54f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1972&q=80"
          alt="/"
        />
      </div>
      {/* right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Plan Your Next Home Repair
        </h3>
        <p className="text-2xl py-6">
          Hire & Admire offers a wide array of home repairs activities.
        </p>
        <p className="pb-6">
          Hire & Admire is your trusted partner for all your home repair and
          improvement needs. We're a one-stop destination for top-quality
          services, offering a wide range of expertise, including plumbing,
          electrical work, cleaning, gardening, painting, and more. With a team
          of skilled professionals and a commitment to excellence, we take pride
          in making your home a better place. Experience hassle-free solutions
          and unmatched reliability with Hire & Admire, your go-to choice for a
          more beautiful and functional home.
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn more
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Home Repair{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
