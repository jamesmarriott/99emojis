import React from "react";

export default function EmojiDisplay ({emoji, emojiAmount, checkCorrect, lose, correct, randomPos}) {

  console.log(emojiAmount)

  return (
    <div className={`grid w-full
    ${parseInt(emojiAmount) === 64 ? "grid-cols-8 gap-2 sm1:gap-2 lg1:gap-4 xl1:gap-4 xl2:gap-5" : ""}
    ${parseInt(emojiAmount) === 81 ? "grid-cols-9 sm1:gap-1 lg1:gap-4 xl1:gap-4" : ""}
    ${parseInt(emojiAmount) === 100 ? "grid-cols-10 gap-2 sm1:gap-3 lg1:gap-4 xl1:gap-4" : ""}
    `}>
     
    {emoji.map((item, index) => (
      <button
        key={index}
        className={`text-3xl vh50 laptop leading-none sm1:text-4xl lg1:text-5xl xl1:text-5xl xl2:text-6xl focus:outline-none
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