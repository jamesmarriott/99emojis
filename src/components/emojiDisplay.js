import React from "react";

export default function EmojiDisplay ({emoji, checkCorrect, lose, correct, randomPos}) {

  return (
    <>
    {emoji.map((item, index) => (
      <button
        key={index}
        className={`text-2xl sm1:text-3xl lg1:text-4xl xl1:text-5xl xl2:text-6xl focus:outline-none 
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