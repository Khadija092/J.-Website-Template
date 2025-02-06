import React from 'react';

function Box5({
  imgSrc1,
  imgSrc2,
  imgSrc3,
  imgSrc4,
  imgSrc5,
  row1Text = ['BLUE CAMBRIC PRINTED KURTI', 'BLUE CAMBRIC PRINTED KURTI', 'BLUE CAMBRIC PRINTED KURTI', 'BLUE CAMBRIC PRINTED KURTI', 'BLUE CAMBRIC PRINTED KURTI'],
  row2Text = ['PKR 2,590.00', 'PKR 2,590.00', 'PKR 2,590.00', 'PKR 2,590.00', 'PKR 2,590.00'],
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-lg">
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-center items-center">
          {[imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5].map((imgSrc, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={imgSrc || 'https://via.placeholder.com/250'} // Fallback image
                alt={`Image ${index + 1}`}
                className="h-[250px] w-[250px] object-cover"
              />
              <p className="text-sm mt-0">{row1Text[index]}</p> {/* No gap between image and name */}
              
              {/* PKR Text - Red and Left Aligned */}
              <div className="flex justify-between items-center w-full">
                <p className="text-md font-bold text-red-500 mt-0">{row2Text[index]}</p> {/* Smaller font for PKR */}
                
                {/* Discount Button - Red background with white text */}
                <button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    fontSize: '0.7rem', // Reduced font size
                    padding: '5px 8px', // Reduced padding
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold',
                  }}
                  className="ml-2"
                >
                  10% OFF
                </button>
              </div>
              
              {/* Third row with 2 small circle buttons */}
              <div className="mt-0.75 flex justify-start w-full">
                {['100ml', '30ml'].map((size, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    style={{
                      borderRadius: '50%',
                      width: '38px', // Increased width
                      height: '40px', // Increased height to maintain circle shape
                      backgroundColor: '#ccc',
                      border: 'none',
                      fontSize: '0.8rem',
                      margin: '0 10px', // Adjusted margin for better spacing
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Box5;
