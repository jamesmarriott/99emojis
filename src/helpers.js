export function generateQuestion(randomPos, emojiAmount) {
  const hundredEmoji = []
  let i = 0
  const emojiBase = [
    ["😃"],["😄"]
  ];
  do {
    if (i === randomPos) { 
      hundredEmoji.push(emojiBase[1])
      console.log(i)
    }
    else hundredEmoji.push(emojiBase[0])
    i = i + 1;
  } 
  while (i < emojiAmount);
  return hundredEmoji
}

// export function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }