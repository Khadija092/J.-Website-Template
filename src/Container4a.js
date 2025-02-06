import React from 'react';

function Container4a({ title }) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-8">
      <div className="text-center text-gray-500 m-0">{title}</div>
      <hr className="w-4/5 border-t-2 m-0" />
    </div>
  );
}

export default Container4a;
