import React from "react";

export default function StartModal () {

  return (
    <div className="fixed inset-0 max-w-md flex items-center justify-center">
      <div className="bg-white w-full p-6">
          <h1 className="text-4xl font-bold text-center leading-none 
          mb-2">99 Emojis</h1>
          <h2 className="text-2xl text-center leading-none mb-2">(and a different one)</h2>
          <button className="bg-blue-500 text-white w-full py-3 t mt-3 rounded-full">Start</button>
      </div>
    </div>
  )
}