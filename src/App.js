import React, { useState, useEffect } from "react";
import { generateQuestion } from "./helpers"
import QuestionDisplay from "./components/questionDisplay"
import { List, arrayMove } from "react-movable";

export default function App() {

// get the new question = pass that to the display child component as props
// display the question as a child component

  const emojiAmount = 100
  const randomPos = Math.floor(Math.random() * emojiAmount)
  const time = 10
  const hundredEmoji = generateQuestion(randomPos, emojiAmount)

  return (
    <QuestionDisplay hundredEmoji={hundredEmoji} randomPos={randomPos} time={time}/>
  )
}

// 99 + 1 Find the odd one out
// timer - need a nice timer bar import something
// randomly generate background colors
// display: Score (score = time bonus), question 1 of 10, 
// timer at the bottom
// modal - correct / wrong / delay and then next question
// when working, make responsive.