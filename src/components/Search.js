import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {

  return (
    <>
      <div className='center'>
          <input type="text" placeholder=' Search for Products...' className='search'/> 
          <div className='point' >
              <FaSearch style={{color: 'grey'}}/>
            </div>
        </div>
    </>
  )
}

export default Search
