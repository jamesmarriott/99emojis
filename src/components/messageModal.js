import React from "react";

export default function MessageModal ({message}) {

if (message !== "")
  return (
    <div className="fixed inset-0 flex items-center justify-center focus:outline-none">
      <div className="bg-white bg-opacity-10 max-w-md w-full p-6">
          <h1 className="focus:outline-none text-7xl font-bold text-red-800 text-center leading-none 
          mb-2">{message}</h1>
      </div>
    </div>
  )
else return (null
)
}