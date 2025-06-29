
import React from 'react';

const SearchHeader = () => {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sigma-lightBlue transform rotate-45"></div>
          <h1 className="text-3xl font-bold text-sigma-navy">SIGMA</h1>
        </div>
        <div className="text-lg font-medium text-sigma-lightBlue tracking-widest">
          SEARCH
        </div>
      </div>
      
      <p className="text-xl text-sigma-blue mb-12 font-medium">
        Smarter search . Better results . Faster decisions.
      </p>
    </div>
  );
};

export default SearchHeader;
