// src/components/Loader.jsx
import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-teal-500 border-opacity-70"></div>
    </div>
  );
};

export default Loader;
