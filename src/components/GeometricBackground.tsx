
import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Top right triangle */}
      <div 
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-sigma-lightBlue/30 to-sigma-blue/20 transform rotate-45"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      ></div>
      
      {/* Bottom left triangle */}
      <div 
        className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-sigma-blue/20 to-sigma-lightBlue/30 transform rotate-45"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
      ></div>
      
      {/* Small accent triangles */}
      <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-sigma-lightBlue/40 transform rotate-45"></div>
      <div className="absolute bottom-1/3 left-1/5 w-8 h-8 bg-sigma-blue/30 transform rotate-45"></div>
    </div>
  );
};

export default GeometricBackground;
