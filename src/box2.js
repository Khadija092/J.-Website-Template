import React from 'react';

function Box2({ imgSrc1, imgSrc2, fullScreen = true }) {
  return (
    <div className="flex justify-center items-center">
    <div className="w-full max-w-screen-lg">
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <img
          src={imgSrc1}
          alt="Image 1"
          className="h-[650px] w-[600px] object-cover"
        />
        <img
          src={imgSrc2}
          alt="Image 2"
          className="h-[650px] w-[600px] object-cover"
        />
      </div>
    </div>
  </div>
  );
}

export default Box2;
