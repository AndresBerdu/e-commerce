import React from 'react';
import { ButtonCategories } from './ButtonCategories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (

    <div>
      <div className="bg-[#391CE2] text-white w-full p-4 text-2xl flex items-center justify-between">
        <span className="font-bold">WEB E-COMMERCE</span>
        <div className="flex items-center space-x-4">
          <div className="border p-2 rounded-full text-sm md:text-base lg:text-lg xl:text-s w-96 ">
            <input
              type="text"
              placeholder="SEARCH YOUR FAVORITE PRODUCT"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{color: "#000000",}} />
          </div>
          <button className="text-white flex items-center justify-center p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
            <FontAwesomeIcon icon={faCircleUser} size="sm" style={{color: "#ffffff",}}
              className="ml-2 justify-center text-center"/>
            <p>User 1</p>
            <FontAwesomeIcon icon={faCaretDown} size="sm" style={{color: "#FFFFFF",}}
              className="ml-2 justify-center text-center"/>
          </button>

          <button className= "text-white p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
            <FontAwesomeIcon icon={faBagShopping} size="sm" style={{color: "#ffffff",}}/>
          </button>

          <button className="text-white p-2 rounded-md text-base md:text-lg lg:text-xl xl:text-2xl">
            <FontAwesomeIcon icon={faBell} size="sm" style={{color: "#ffffff",}}/>
          </button>
        </div>
      </div>
        <div className="bg-[#00004C] text-white font-light w-full h-auto p-4 text-sm flex items-center justify-between">
          <ButtonCategories/>
          <p>Home Appliances</p>
          <p>Home And Garden</p>
          <p>Clothes And Dresses</p>
          <p>Kid Toys</p>
          <p>Brands</p>
        </div>

        <body>
          <div>
           <img src='../../public/modelo.jpg' alt='modelo'/>
          </div>
        </body>
    </div>
  );
}

export { Sidebar };
