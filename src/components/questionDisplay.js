import React, { useState, useEffect, useRef } from "react";
import MessageModal from "./messageModal";
import GameOver from "./finalscore";
import NextModal from "./nextModal";
import EmojiDisplay from "./emojiDisplay";
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
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [roundOver, setRoundOver] = useState(false)
  const [lose, setLose] = useState(false)
  const [emoji, setEmoji] = useState([])
  const [score, setScore] = useState(0)
  const [roundNumber, setRoundNumber] = useState(1)
  const totalRounds = 10;
  
const checkCorrect = (item, index) => {
  if (!lose && index === randomPos){
    setMessage("✔️")
    setCorrect(true)
    setScore(score+counter)
  }
  else {
    if (!lose) setMessage("❌")
  }
}

useEffect(() => {
const hundredEmoji = []
    let i = 0  
    console.log(questionNum)
    console.log(randomPos)
  
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
  message === "✔️" && setTimeout(() => setMessage(""), 1500);
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
  console.log(questionNum)
  console.log(randomPos)
  console.log(emoji)
  setRoundOver(false)
  setLose(false)
  setCorrect(false)
}

function playAgainClick() {
    window.location.reload();
 }

// const handleClick = () => {
//   setQuestionNum(prevState => prevState + 1)
//   setEmoji(generateQuestion(randomPos, emojiAmount, questionNum))
// }

  return (
    <>
    {(roundOver && !gameOver) ?
    <NextModal nextClick={nextClick} score={score} roundNumber={roundNumber} totalRounds={totalRounds}/> : null}
    {gameOver ? 
    <GameOver playAgainClick={playAgainClick} score={score} roundNumber={roundNumber} totalRounds={totalRounds}/> : null}
    {message !=="" && <MessageModal message={message}/>}
    <div className="flex h-screen bg-green-200 justify-items-stretch">
      {emoji.length > 0 &&
        <div className="m-auto">
            <div className="font-sans pb-10 text-5xl text-center">One of These Things Is Not Like The Others</div>
          <div className={`grid grid-cols-10 gap-5`}>
            <EmojiDisplay emoji={emoji} checkCorrect={checkCorrect} correct={correct} lose={lose} randomPos={randomPos}/>
          </div>
          {/* <div className="font-sans text-center pt-6 text-4xl">{Math.round(counter)}</div> */}
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