import React from 'react';

export const ProductDetailSkeleton = () => {
  return (
    <div className="px-4 sm:px-6 py-4 grid grid-rows-5 md:grid-rows-1 md:grid-cols-3 gap-4 h-[900px] sm:h-auto animate-pulse">
      {/* Image Section */}
      <div className="md:col-span-1 row-span-3 w-full flex justify-center items-center">
        <div className="bg-gray-300 rounded-lg h-[300px] sm:h-[400px] w-[300px] sm:w-[400px]" />
      </div>

      {/* Info Section */}
      <div className="relative bg-gray-100 text-sm sm:text-base row-span-2 py-6 sm:py-10 rounded-3xl md:col-span-2 w-full h-fit md:h-full flex flex-col items-start sm:items-center justify-between gap-6 px-4 sm:px-6">
        {/* Header */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex justify-between items-center w-full">
            <div className="bg-gray-300 h-4 w-24 rounded-full" />
            <div className="bg-gray-300 h-4 w-16 rounded-full" />
          </div>
          <div className="bg-gray-300 h-6 w-3/4 rounded-full mt-2" />
        </div>

        {/* Description */}
        <div className="space-y-2 w-full max-h-[240px] overflow-hidden">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-gray-300 h-3 w-full rounded-full" />
          ))}
        </div>

        {/* Actions */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center pt-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-gray-300 h-10 w-full sm:w-32 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};
