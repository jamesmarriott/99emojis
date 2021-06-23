import React, { useState, useEffect } from "react";
import QuestionDisplay from "../components/questionDisplay"
import CountModal from "../components/countModal"
import useSound from 'use-sound'
import img from '../opimage.png';
import sfxpopup from '../sfx/popup.mp3'

export default function Game() {

// get the new question = pass that to the display child component as props
// display the question as a child component

const [countDown, setCountDown] = useState(3);
const [countStart, setCountStart] = useState(false)
const [startGame, setStartGame] = useState(false)
const [emojiAmount, setEmojiAmount] = useState(100)
// const [isChecked, setIsChecked] = useState(false);
const time = 1000

const [playOn] = useSound(
  sfxpopup,
  { volume: 1 }
);

  const startCount = () => {
    setCountStart(true)
  }

  const handleChange = (event) => {
    const {value} = event.target
    setEmojiAmount(value)
    playOn()

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
                mb-2">😂 {emojiAmount - 1} Emojis 🤦</h1>
                <h2 className="text-2xl text-center leading-none 
                mb-2 mt-3 pb-3">(and a different one)</h2>
                <select
                defaultValue={emojiAmount}
                onChange={handleChange}
                className="w-full bg-white border border-gray-00 hover:border-gray-500 px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline text-2xl">
                    <option value="100" 
                    className="text-2xl text-center leading-none
                    mb-2">99+1 (hard)</option>

                    <option value="81"
                    className="text-2xl text-center leading-none
                    mb-2">80+1 (easier - tablet friendly)</option>

                    <option value="64"
                    className="text-2xl text-center leading-none
                    mb-2">63+1 (easiest - mobile friendly)</option>

                  </select>
                
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

