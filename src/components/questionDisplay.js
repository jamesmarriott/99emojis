import React, { useState, useEffect } from "react"
import MessageModal from "./messageModal"
import GameOver from "./finalscore"
import NextModal from "./nextModal"
import EmojiDisplay from "./emojiDisplay"
import useSound from 'use-sound'
import sfxwin from '../sfx/win.mp3'
import sfxwrong from '../sfx/wrong.mp3'
// import useUpdateEffect from "./useUpdateEffects";

// round number increment
// score increment (correct +500 + time remaining)
// game over / play again

export default function QuestionDisplay ({emojiAmount, time}) {
  const [randomPos, setRandomPos] = useState(Math.floor(Math.random() * emojiAmount))
  const [correct, setCorrect] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [counter, setCounter] = useState(time);
  const [questionNum, setQuestionNum] = useState(1)
  const [roundScore, setRoundScore] = useState(0)
  const [message, setMessage] = useState("");
  const [roundOver, setRoundOver] = useState(false)
  const [lose, setLose] = useState(false)
  const [emoji, setEmoji] = useState([])
  const [score, setScore] = useState(0)
  const [roundNumber, setRoundNumber] = useState(1)
  const totalRounds = 10;
  
  const [winSound] = useSound(
    sfxwin,
    { volume: 0.5 }
  );
  const [wrongSound] = useSound(
    sfxwrong,
    { volume: 0.5 }
  );

const checkCorrect = (item, index) => {
  if (!lose && index === randomPos){
    winSound()
    setMessage("✅")
    setCorrect(true)
    setRoundScore(counter)
    setScore(score+counter)
  }
  else {
    if (!lose && !correct) setMessage("❌")
    wrongSound()
  }
}

useEffect(() => {
const hundredEmoji = []
    let i = 0
    const emojiBase = {
      1: ["✋", "🖐"],
      2: ["😃", "😄"],
      3: ["😦", "😧"],
      4: ["😮", "😶"],
      5: ["💁🏻‍♀️", "🙅🏻‍♀️"],
      6: ["👩🏻‍🦼", "👨🏻‍🦽"],
      7: ["💂🏼‍♀️", "💂🏼"],
      8: ["🕵🏼‍♀️", "🕵🏼"],
      9: ["👨🏽", "🧑🏽"],
      10: ["😈", "👿"],
    };
    
    do {
      if (i === randomPos) { 
        hundredEmoji.push(emojiBase[questionNum][1])
      }
      else hundredEmoji.push(emojiBase[questionNum][0])
      i = i + 1;
    } 
    while (i < emojiAmount);
    setEmoji(hundredEmoji)
}, [roundOver])

useEffect(() => {
  message === "❌" && setTimeout(() => setMessage(""), 500);
  message === "✅" && setTimeout(() => setMessage(""), 1500);
  message === "⏰" && setTimeout(() => setMessage(""), 1500)
}, [message]);

useEffect(() => {
  (counter > 0 && !correct) && setTimeout(() => setCounter(counter - 1), 10)
}, [counter]);

useEffect(() => {
  counter === 0 && setLose(true)
  counter === 0 && setMessage("⏰") 
}, [counter]);

useEffect(() => {
    (lose || correct) && setTimeout(() => 
    setRoundOver(true), 1500)
  }, [lose,correct]);

function nextClick() {
  if (roundNumber === totalRounds) {
    setRoundOver(false)
    setGameOver(true)
    return
  } else {
  setRoundNumber(roundNumber + 1) }
  setQuestionNum(questionNum + 1)
  setCounter(time)
  setRandomPos(Math.floor(Math.random() * emojiAmount))
  setRoundOver(false)
  setLose(false)
  setCorrect(false)
  setRoundScore(0)
}

function playAgainClick() {
    window.location.reload();
 }

  return (
    <>
    {(roundOver && !gameOver) ?
    <NextModal nextClick={nextClick} roundScore={roundScore} roundNumber={roundNumber} totalRounds={totalRounds}/> : null}
    {gameOver ? 
    <GameOver playAgainClick={playAgainClick} score={score} roundNumber={roundNumber} totalRounds={totalRounds}/> : null}
    {message !=="" && <MessageModal message={message}/>}
    <div className="flex h-screen bg-indigo-200 justify-items-stretch text-2xl sm1:text-3xl lg1:text-4xl xl1:text-5xl">
      {emoji.length > 0 &&
        <div className="m-auto">
            <div className="font-mono text-1xl leading-none sm1:text-2xl lg1:text-3xl xl1:text-4xl xl2:text-5xl pb-6 text-center">Which one is different?</div>
          <div className="flex justify-between grid-cols-2 flex-auto pb-4">
          <div className="flex font-mono pb-4 text-1xl leading-none sm1:text-2xl lg1:text-3xl xl1:text-4xl xl2:text-5xl text-center">Score: {score}</div>
            <div className="flex font-mono pb-4 text-1xl leading-none sm1:text-2xl lg1:text-3xl xl1:text-4xl xl2:text-5xl text-center">🤔</div>
            <div className="flex font-mono pb-4 text-1xl leading-none sm1:text-2xl lg1:text-3xl xl1:text-4xl xl2:text-5xl text-center">💖💖💖</div>
          </div>
            <EmojiDisplay emoji={emoji} emojiAmount={emojiAmount} checkCorrect={checkCorrect} correct={correct} lose={lose} randomPos={randomPos}/>
          <div className="relative pt-6 ml-2 mr-2">
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
