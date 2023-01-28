import React,{useState, useEffect} from 'react'

function Location() {
    const [location, setLocation] = useState({
        id: " ",
        address: " ",
        
    })
  return (
    <div className='locBox'>
    <p className="location"> Enter Location</p>
     <input className='textBox' type="text"></input> 
     </div>
     
 
  )
}

export default Location