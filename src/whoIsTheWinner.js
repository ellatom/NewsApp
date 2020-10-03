function whoIsTheWinner(board) {
    const winPermutations = [//options to win vertical/horizenatlly/diagonally
      [0, 1, 2],//1
      [3, 4, 5],//2...
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winPermutations.length; i++) 
    {
      const [a, b, c] = winPermutations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) //if board[a]is null return/ board[3]=?board[4]=?board[5]
      {
        return board[a];//return x/o winner
      }
    }
    return null;
  }
  
  export default whoIsTheWinner;
