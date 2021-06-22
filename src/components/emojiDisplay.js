import React from "react";

export default function EmojiDisplay ({emoji, emojiAmount, checkCorrect, lose, correct, randomPos}) {

  return (
    <div className={`grid gap-0 sm1:gap-2 lg1:gap-3 xl1:gap-5
    ${emojiAmount == 81 ? "grid-cols-9 gap-1" : ""}
    ${emojiAmount == 64 ? "grid-cols-8 gap-1" : ""}
    ${emojiAmount == 100 ? "grid-cols-10" : ""}
    `}>
     
    {emoji.map((item, index) => (
      <button
        key={index}
        className={`text-3xl sm1:text-4xl lg1:text-5xl xl1:text-6xl xl2:text-6xl focus:outline-none 
        ${lose ? "cursor-not-allowed" : ""} 
        ${lose && index !== randomPos? "opacity-20" : ""}
        ${correct && index !== randomPos? "opacity-20" : ""}
        `}
        onClick={() => checkCorrect(item, index)}
        >{item}</button>
    ))}
    </div>
  )
}