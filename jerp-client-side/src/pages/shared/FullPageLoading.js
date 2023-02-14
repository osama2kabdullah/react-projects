import React from "react";

const FullPageLoading = () => {
  return (
    <div className="absolute flex justify-center items-center w-full h-screen" style={{backgroundColor: 'rgba(247, 247, 247, 0.699)'}}>
        <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  );
};

export default FullPageLoading;
