import React from "react";


export default function CountModal ({countDown}) {



  return (
    <div className="font-mono w-full fixed inset-0 flex items-center justify-center">
      <div className={`max-w-md w-full p-10 opacity-100
      ${parseInt(countDown) === 3 ? "text-red-500" : ""}
      ${parseInt(countDown) === 2 ? "text-yellow-500" : ""}
      ${parseInt(countDown) === 1 ? "text-green-500" : ""}`}>
          <h1 className="text-7xl font-bold text-center leading-none 
          mb-2">{countDown}</h1>
      </div>
    </div>
  )
}



