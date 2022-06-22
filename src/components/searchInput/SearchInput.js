import React from 'react';

const SearchInput = ({searchLocation, setLocation,location}) => {
  return (
    <div>    
      <input 
        style={{backgroundColor: "", color: "white", 
        width: "300px", height:"50px", 
        textAlign:"center", marginBottom:"40px"}} 
        value={location}
        onChange={Event => setLocation(Event.target.value)}
        onKeyDown={searchLocation}
        placeholder="Enter Location"
        type="text"
      />
    </div>
  )
}

export default SearchInput;