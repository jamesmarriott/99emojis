import React, { useState, useEffect } from "react";
import MessageModal from "./messageModal";
import NextModal from "./nextModal";
import { generateQuestion } from "../helpers"
import useUpdateEffect from "./useUpdateEffects";

export default function QuestionDisplay ({emojiAmount, randomPos, time}) {
  const [correct, setCorrect] = useState(false);
  const [counter, setCounter] = useState(time);
  const [questionNum, setQuestionNum] = useState(1)
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [roundOver, setRoundOver] = useState(false)
  const [lose, setLose] = useState(false)
  const initialState = generateQuestion(randomPos, emojiAmount, questionNum)
  const [emoji, setEmoji] = useState(initialState)

const checkCorrect = (item, index) => {
  if (!lose && index === randomPos){
    setMessage("Correct!")
    setCorrect(true)
  }
  else {
    if (!lose) setMessage("Wrong!")
  }
}

useEffect(() => {
  message === "Wrong!" && setTimeout(() => setMessage(""), 500);
}, [message]);

useEffect(() => {
  (counter > 0 && !correct) && setTimeout(() => setCounter(counter - 1), 1000)
}, [counter]);

useEffect(() => {
  counter === 0 && setLose(true)
  counter === 0 && setMessage("Time's Up!");
}, [counter]);

useUpdateEffect(() => {
  (lose || correct) && setTimeout(() => 
  setRoundOver(true), 2000)
}, [lose,correct]);

const nextClick = () => {
  setQuestionNum(prevState => prevState + 1)
  setEmoji(generateQuestion(randomPos, emojiAmount, questionNum))
}

  return (
    <>
    {roundOver ? 
    <NextModal nextClick={nextClick}/> : null}

    <MessageModal message={message}/>
    <div className="flex h-screen bg-green-200 justify-items-stretch">
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
          </div>
          <div className="font-sans text-center pt-6 text-4xl">{counter}</div>
          <div className="relative pt-6">
            <div className="overflow-hidden h-6 mb-4 text-xs flex rounded bg-pink-200">
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

// todo - start modal 
// Start modal with button
// 