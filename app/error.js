"use client";

import { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);
  return (
    <div className="h-screen w-full place-items-center justify-items-center">
      <h2 className="text-3xl"> Something went wrong! </h2>
    </div>
  );
};

export default Error;
