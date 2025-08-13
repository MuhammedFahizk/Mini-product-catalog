import React from "react";
import { BiSolidError } from "react-icons/bi";

export const ErrorComponent = ({ message = "Something went wrong." }) => {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-md w-full max-w-xl text-center flex flex-col items-center gap-2">
        <BiSolidError size={48} className="text-red-600" />
        <h2 className="text-lg sm:text-xl font-semibold">Oops!</h2>
        <p className="text-sm sm:text-base">{message}</p>
      </div>
    </div>
  );
};

