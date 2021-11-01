import React, { useState, useEffect } from "react";
import QuestionDisplay from "../components/questionDisplay"
import CountModal from "../components/countModal"
import useSound from 'use-sound'
import sfxbeeplow from '../sfx/beeplow.mp3'
import sfxbeephigh from '../sfx/beephigh.mp3'

export default function Game() {
const [countDown, setCountDown] = useState(3);
const [countStart, setCountStart] = useState(false)
const [startGame, setStartGame] = useState(false)
const [emojiAmount, setEmojiAmount] = useState(100)

const time = 1000

const [beepLow] = useSound(
  sfxbeeplow,
  { volume: 1 }
);

const [beepHigh] = useSound(
  sfxbeephigh,
  { volume: 1 }
);

  const startCount = () => {
    setCountStart(true)
    beepLow()
  }

  const handleChange = (event) => {
    const {value} = event.target
    setEmojiAmount(value)
  }

  useEffect(() => {
    if (countDown > 0 && countStart === true) {
    setTimeout(() => 
    { if (countDown > 1) 
      {beepLow()}
      else {beepHigh()}
      setCountDown(countDown - 1) }
    , 1000);
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
          <div className="bg-gradient-to-r from-green-400 to-blue-500 font-mono fixed inset-0 flex items-center justify-center">
            <div className="max-w-md w-full p-6">
            {countStart ?
                <CountModal countDown={countDown}/> :
                <>
                <h1 className="text-4xl font-bold text-center leading-none 
                mb-2">{emojiAmount-1} emojis</h1>
                <h2 className="text-2xl text-center leading-none 
                mb-2 mt-3 pb-5">+ a different one</h2>
                
                <select
                defaultValue={emojiAmount}
                onChange={handleChange}
                className="w-full border bg-transparent border-gray-00 hover:border-gray-500 px-2 py-2 pr-8 rounded leading-tight focus:outline-none focus:shadow-outline text-2xl">
                    <option value="100" 
                    className="text-2xl text-center leading-none 
                    mb-2">99+1</option>

                    <option value="81"
                    className="text-2xl text-center leading-none
                    mb-2">80+1</option>

                    <option value="64"
                    className="text-2xl text-center leading-none
                    mb-2">63+1</option>

                  </select>
                

                <button className="bg-blue-500 text-white text-xl w-full py-3 mt-3 rounded-full" 
                onClick={startCount}
                >
                  Start</button>
                </>}
          </div>
        </div>
      )
    }
    </>
  )
}

