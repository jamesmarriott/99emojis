import React from "react";

export default function EmojiDisplay ({emoji, checkCorrect, lose, correct, randomPos}) {

  return (
    <>
    {emoji.map((item, index) => (
      <button
        key={index}
        className={`text-6xl focus:outline-none 
        ${lose ? "cursor-not-allowed" : ""} 
        ${lose && index !== randomPos? "opacity-20" : ""}
        ${correct && index !== randomPos? "opacity-20" : ""}
        `}
        onClick={() => checkCorrect(item, index)}
        >{item}</button>
    ))}
    </>
  )
}

{/* 
{emoji.length > 0 &&
  <div className="m-auto">
      <div className="font-sans pb-10 text-5xl text-center">Find the odd one out!</div>
    <div className={`grid grid-cols-10 gap-5`}>
      {emoji.map((item, index) => (
        <button
          key={index}
          className={`text-6xl focus:outline-none ${lose ? "cursor-not-allowed" : ""} ${lose && index !== randomPos? "opacity-20" : ""}`}
          onClick={() => checkCorrect(item, index)}
          >{item}</button>
      ))}
    </div> */}