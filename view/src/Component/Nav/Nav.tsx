import React from 'react'
import './nav.css';
const Nav: React.FC<{}> = () => {
  return (
    <>
    
       <div className='Nav'>
        <button className= 'btn'>Find Events </button>
       </div>
       <div className='userInput'>
        Enter Location
        <br/>
        <input type="text"></input> 
       </div>
    </>
    
    // <div>Nav</div>
  
  
  );
}

export default Nav;