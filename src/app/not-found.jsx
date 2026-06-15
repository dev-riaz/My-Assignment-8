import Link from "next/link";
import React from "react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-7xl font-bold text-red-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
