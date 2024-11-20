import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

// The LoadingSpinner component is intended to be used in scenarios where a
// loading state is required, such as while data is being fetched from an API,
// a file is being processed, or any other asynchronous operation.
// It provides a visual cue to the user that something is happening in the background,
// improving the user experience by indicating that
// the application is not frozen or unresponsive.
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center p-4">
      {/* Loading spinner */}
      <ClipLoader
        color="#4A90E2"
        size={60} // Adjust size as needed
        aria-label="Loading Spinner"
        data-testid="loader"
      />

      {/* Loading text */}
      <p className="absolute mt-20 text-lg font-semibold text-gray-700 dark:text-offwhite">
        Loading...
      </p>
    </div>
  );
};

export default LoadingSpinner;
