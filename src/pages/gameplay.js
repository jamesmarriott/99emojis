import React, { useState, useEffect } from "react";
import { generateQuestion } from "../helpers"
import QuestionDisplay from "../components/questionDisplay"
import StartModal from "../components/startModal"
import CountModal from "../components/countModal"

export default function Game({}) {

// get the new question = pass that to the display child component as props
// display the question as a child component

const [countDown, setCountDown] = useState(3);
const [countStart, setCountStart] = useState(false)
const [startGame, setStartGame] = useState(false)
const emojiAmount = 100
const [randomPos, setRandomPos] = useState()
const time = 10

  const startCount = () => {
    setRandomPos(Math.floor(Math.random() * emojiAmount))
    setCountStart(true)
  }

function nextClick() {
    console.log("next")
  }

  useEffect(() => {
    if (countDown > 0 && countStart === true) {
    setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    else if (countDown === 0) {
      setStartGame(true)
    }
  });

   return (
     <>
      {startGame ? (
        <QuestionDisplay emojiAmount={emojiAmount} randomPos={randomPos} time={time}/>
      ) : (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white max-w-md w-full p-6">
                <h1 className="text-4xl font-bold text-center leading-none 
                mb-2">99 Emojis</h1>
                <h2 className="text-2xl text-center leading-none mb-2">(and a different one)</h2>

                {countStart ?
                <CountModal countDown={countDown}/> :
                <button className="bg-blue-500 text-white w-full py-3 t mt-3 rounded-full" 
                onClick={startCount}
                >
                  Start</button>
                }
          </div>
        </div>
      )
    }
    </>
  )
}
 



//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="bg-white max-w-md w-full p-6">
//           <h1 className="text-4xl font-bold text-center leading-none 
//           mb-2">99 Emojis</h1>
//           <h2 className="text-2xl text-center leading-none mb-2">(and a different one)</h2>
//           <button className="bg-blue-500 text-white w-full py-3 t mt-3 rounded-full">Start</button>
//       </div>
//     </div>
//   )
// }

    {/* <QuestionDisplay hundredEmoji={hundredEmoji} randomPos={randomPos} time={time}/> */}