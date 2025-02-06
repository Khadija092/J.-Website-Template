import React from 'react';

function Box3({ imgSrc1, imgSrc2, imgSrc3, fullScreen = true }) {
  return (
    <div className={`flex justify-center items-center`}>
      <div className="w-full max-w-screen-lg">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="relative">
            <img
              src={imgSrc1}
              alt="Image 1"
              className="h-[450px] w-[350px] sm:w-[350px] w-full object-cover"
            />
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-1 px-4 "
              style={{ fontSize: '0.9rem' }}
            >
              1PC STITCHED
            </button>
          </div>
          <div className="relative">
            <img
              src={imgSrc2}
              alt="Image 2"
              className="h-[450px] w-[350px] sm:w-[350px] w-full object-cover"
            />
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-1 px-4 "
              style={{ fontSize: '0.9rem' }}
            >
              2PC STITCHED
            </button>
          </div>
          <div className="relative">
            <img
              src={imgSrc3}
              alt="Image 3"
              className="h-[450px] w-[350px] sm:w-[350px] w-full object-cover"
            />
            <button
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black font-bold py-1 px-4 "
              style={{ fontSize: '0.9rem' }}
            >
              3PC STITCHED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box3;
