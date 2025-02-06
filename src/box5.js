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
              
              {/* PKR and button row with center alignment */}
              <div className="flex justify-between items-center  w-full mt-0">
                <p className="text-base font-bold text-red-500">{row2Text[index]}</p> {/* Smaller font size for price */}
                <button
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '3px 8px',  // Reduced padding for button
                    border: 'none',
                    borderRadius: '5px',
                    fontSize: '0.8rem',  // Reduced font size for button text
                    height: '30px', // Matching button height with price height
                  }}
                >
                  10% OFF
                </button>
              </div>
              
              {/* Third row with 4 small circle buttons */}
              <div className="mt-0.75 flex justify-start w-full">
                {['S', 'M', 'L', 'XL'].map((size, buttonIndex) => (
                  <button
                    key={buttonIndex}
                    style={{
                      borderRadius: '50%',
                      width: '30px',
                      height: '30px',
                      backgroundColor: '#ccc',
                      border: 'none',
                      fontSize: '0.8rem',
                      margin: '0 5px',
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
