import React from "react";

const NextModal = ({ nextClick, roundScore, roundNumber, totalRounds }) => (
  <>
    <div className="font-mono z-40 fixed inset-0 flex items-center justify-center">
      <div className="bg-white max-w-md w-full p-6 bg-opacity-95">
          <h1 className="text-4xl font-bold text-center leading-none mb-2">Round Score {roundScore}</h1>
          <h2 className="text-2xl text-center leading-none mb-2">Round {roundNumber} of {totalRounds}</h2>
          <button
          className="bg-blue-500 text-white w-full py-3 t mt-3 rounded-full"
         onClick={nextClick}
          >Next</button>
      </div>
    </div>
  </>
  )

export default NextModal