import React from 'react';

function SuButt() {
  return (
    <div 
      className="flex justify-center items-center space-x-4 p-4 "
      style={{ 
        backgroundImage: 'url("/min.png")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '1550px',  // Adjust the width as needed
        height: '80px'  // Adjust the height as needed
      }}
    >
      <button className="btn btn-outline btn-info">FOOD</button>
      <button className="btn btn-outline btn-success">DRINK</button>
      <button className="btn btn-outline btn-warning">BRUNCH</button>
    </div>
  );
}

export default SuButt;
