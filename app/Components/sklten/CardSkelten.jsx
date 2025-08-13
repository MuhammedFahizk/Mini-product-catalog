import React from 'react';
import { PiImagesFill } from "react-icons/pi";

export const CardSkelten = () => {
  return (
    <div
      role="status"
      className="w-full max-w-sm border border-gray-200 rounded-lg p-4 shadow-sm animate-pulse bg-white dark:bg-dark/30"
    >
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex justify-center items-center">
        <PiImagesFill className="text-4xl text-gray-400" />
      </div>

      {/* Title + Subtitle */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded-full w-3/4" />
        <div className="h-3 bg-gray-200 rounded-full w-1/2" />
      </div>

      {/* Price or Button */}
      <div className="mt-4 h-3 bg-gray-200 rounded-full w-1/3" />
    </div>
  );
};
