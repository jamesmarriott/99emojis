import React from "react";

export default function CountModal ({countDown}) {

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-6">
          <h1 className="text-7xl font-bold text-red-900 text-center leading-none 
          mb-2">{countDown}</h1>
      </div>
    </div>
  )
}