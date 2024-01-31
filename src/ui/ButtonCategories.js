import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const ButtonCategories = () => {

  return (
    <button className="bg-[#231389] flex items-center justify-center rounded-full p-2 absolute my-2">
        <FontAwesomeIcon icon={faBars} size="sm" style={{color: "#FFFFFF",}}
          className="mr-2"/>
        <p>All Categories</p>
        <FontAwesomeIcon icon={faCaretDown} size="sm" style={{color: "#FFFFFF",}}
          className="ml-2"/>
    </button>
    
  )
}

export { ButtonCategories };