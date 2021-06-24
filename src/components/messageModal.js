import React from "react";

export default function MessageModal ({message}) {

if (message !== "")
  return (
    <div className="font-mono fixed inset-0 flex items-center justify-center focus:outline-none">
      <div className="bg-white bg-opacity-0 w-full p-6">
          <h1 className="focus:outline-none text-2xl sm1:text-3xl lg1:text-4xl xl1:text-6xl font-bold text-red-800 text-center leading-none mb-2">{message}</h1>
      </div>
    </div>
  )
else return (null
)
}