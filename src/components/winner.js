import React from "react";

const WonGame = ({ playAgainClick, score, roundNumber, totalRounds }) => (
  <>
    <div className="z-40 fixed inset-0 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-6 bg-opacity-95">
          <h1 className="text-4xl font-bold text-center leading-none mb-2">✨ You did it!! ✨</h1>
          <h2 className="text-2xl text-center leading-none mb-2">You completed all {roundNumber} levels.</h2>
          <h2 className="text-2xl text-center leading-none mb-2">Your final score is {score}.</h2>
          <button
          className="bg-blue-500 text-white w-full py-3 t mt-3 rounded-full"
         onClick={playAgainClick}
          >Play Again?</button>
      </div>
    </div>
  </>
  )

export default WonGame