import React from 'react'
import "./Searchbar.css"
import {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { filterProps } from '@mantine/core';


function Searchbar(props) {

  const [search, setSearch] = useState("");

  const searchHandler = () => {
    props.filterHandler(search);
  }

  return (
    <div className='search'> 
            <input type="text" placeholder="Explore" onChange={ (e) => setSearch(e.target.value)}/>
            <button className='btn' onClick={ searchHandler() } ><SearchIcon /></button>
    </div>
  )
}

export default Searchbar