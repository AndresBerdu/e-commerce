import React from 'react';

const Sidebar = () => {
  return (
    <div className='bg-blue-800 text-white w-full p-4 text-2xl font-bold flex items-center justify-between'>
      <span>WEB E-COMMERCE</span>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="SEARCH YOUR FAVORITE PRODUCT                            🔍"
          className="border p-2 rounded-md text-sm md:text-base lg:text-lg xl:text-xl w-96 mr-4"
        />

        <button className="text-white p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
          👤 
        </button>

        <button className= "text-white p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
          🛍️ 
        </button>

        <button className="text-white p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
          🔔 
        </button>

      </div>
    </div>
  );
}

export { Sidebar };
