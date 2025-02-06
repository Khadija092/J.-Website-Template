import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function Flexbox({largeimg,smallimg1,smallimg2,smallimg3}) {
  return (
    <div>
      <div className="container mx-auto">

         <div className="flex justify-center items-center mb-4">
          <img 
           src={largeimg}
            alt="Large Image" 
           className="h-[500px] w-[400px] object-cover"
          />
</div>


<div className="flex justify-center items-center space-x-4">
  <img 
    src={smallimg1}
    alt="Small Image 1" 
    className="h-[100px] w-[70px] object-cover"
  />
  <img 
    src={smallimg2}
    alt="Small Image 2" 
    className="h-[100px] w-[70px] object-cover"
  />
  <img 
    src={smallimg3}
    alt="Small Image 3" 
    className="h-[100px] w-[70px] object-cover"
  />
</div>
</div>

    </div>
  )
}

export default Flexbox
