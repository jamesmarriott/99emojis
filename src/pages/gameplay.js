import React, { useState, useEffect } from "react";
import QuestionDisplay from "../components/questionDisplay"
import CountModal from "../components/countModal"

export default function Game() {

// get the new question = pass that to the display child component as props
// display the question as a child component

const [countDown, setCountDown] = useState(3);
const [countStart, setCountStart] = useState(false)
const [startGame, setStartGame] = useState(false)
const [emojiAmount, setEmojiAmount] = useState(100)
// const emojiAmount = 100
const time = 1000

  const startCount = () => {
    setCountStart(true)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setEmojiAmount(value)
  }

  useEffect(() => {
    if (countDown > 0 && countStart === true) {
    setTimeout(() => setCountDown(countDown - 1), 1000);
    }
    else if (countDown === 0) {
      setStartGame(true)
    }
  },[countDown, countStart]);

   return (
     <>
      {startGame ? (
        <QuestionDisplay emojiAmount={emojiAmount} time={time}/>
      ) : (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white max-w-md w-full p-6">
                <h1 className="text-4xl font-bold text-center leading-none 
                mb-2">99 Emojis</h1>
                <select
                defaultValue={emojiAmount}
                onChange={handleChange}
                className="w-full bg-white border border-gray-00 hover:border-gray-500 px-2 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-2xl">
                    <option value="100" 
                    className="text-2xl text-center leading-none
                    mb-2">99+1 Emojis</option>

                    <option value="81"
                    className="text-2xl text-center leading-none
                    mb-2">80+1 Emojis (mobile friendly)</option>

                    <option value="64"
                    className="text-2xl text-center leading-none
                    mb-2">63+1 Emojis (mobile friendly)</option>

                  </select>
                
                  {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div> */}


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

