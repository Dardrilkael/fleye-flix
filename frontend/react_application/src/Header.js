import React from 'react';

const Header = ({ searchTerm,setSearchTerm, handleSearch })=>{
    return (
    <header>
    <input
          type="text"
          placeholder="Procure por um filme..."
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
        />
         <button onMouseUp ={handleSearch}>Search</button>
        </header>
);
}



export default Header;
