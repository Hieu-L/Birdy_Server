import React from 'react'
import "./Searchbar.css"
import SearchIcon from '@mui/icons-material/Search';


function Searchbar() {
  return (
    <div className='search'> 
            <input type="text" placeholder="Explore"/>
            <button className='btn'><SearchIcon /></button>
    </div>
  )
}

export default Searchbar