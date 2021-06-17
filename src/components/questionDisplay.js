import React, { useState, useEffect } from "react";
import { generateQuestion } from "../helpers"

export default function QuestionDisplay ({hundredEmoji, randomPos, time}) {
  const [correct, setCorrect] = useState(false);
  const [counter, setCounter] = useState(time);

const checkCorrect = (item, index) => {
  if (index === randomPos) {
    console.log("correct")
  }
  else {
    console.log("wrong")
  }
}

useEffect(() => {
  counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
}, [counter]);

  return (
    <>
    <div className="flex h-screen bg-green-200 justify-items-stretch">
      {hundredEmoji.length > 0 &&
        <div className="m-auto">
            <div className="flex font-sans pb-10 text-5xl align-center">
              <div>Score: 100</div>
              <div>Which one is different?</div>
              </div>
          <div className="grid grid-cols-10 gap-5">
            {hundredEmoji.map((item, index) => (
              <button
                key={index}
                className="text-6xl focus: outline-none"
                onClick={() => checkCorrect(item, index)}
                >{item}</button>
            ))}
          </div>
          <div className="font-sans text-center pt-6 text-4xl">{counter}</div>
          <div className="relative pt-6">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200">
                <div style={{ width: `${counter*(100/time)}%`}} 
                  className="transition-all ease-out duration-100 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-600">
                </div>
            </div>
          </div>
        </div>
  }
  </div>
  </>
  )
}


{/* <h1 class=>Progress Bar</h1>
<div class="h-3 relative max-w-xl rounded-full overflow-hidden">
    <div class="w-full h-full bg-gray-200 absolute"></div>
    <div id="bar" class="transition-all ease-out duration-1000 h-full bg-green-500 relative w-0"></div>
</div> */}


// display: Score (score = time bonus), question 1 of 10, 
// modal - correct / wrong / delay and then next question
// when working, make responsive.
// randomly generate background colors