import React from 'react';

export default function EmptyState({ message = "No data found." }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-4 text-center text-gray-600">
      <img
        src="https://res.cloudinary.com/dnqx8sqdw/image/upload/e_background_removal/f_png/v1753617909/jpqmrvycqyp47wzaaneh.jpg"
        alt="Empty State"
        className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 object-contain"
      />
      <p className="text-lg sm:text-xl font-medium">{message}</p>
    </div>
  );
}
