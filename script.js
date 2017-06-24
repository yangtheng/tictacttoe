function newGame (){
  var square = document.getElementsByClassName('square')
  var currentTurn = 'X'
  function move () {
    if (this.innerHTML != '') {
      alert ('box is filled!')
    } else if (currentTurn === 'O') {
      this.innerHTML = 'X'
      currentTurn = 'X'
      gameOver ('X')
    } else if (currentTurn === 'X') {
      this.innerHTML = 'O'
      currentTurn = 'O'
      gameOver ('O')
    }
  }
  function gameOver (a) {
    var boardArray = []
    for (var i = 1; i <= 9; i++) {
      boardArray.push(document.getElementById(i).innerHTML)
    }
    if (boardArray[1 - 1] === a && boardArray[2 - 1] === a && boardArray[3 - 1] === a ||
        boardArray[4 - 1] === a && boardArray[5 - 1] === a && boardArray[6 - 1] === a ||
        boardArray[7 - 1] === a && boardArray[8 - 1] === a && boardArray[9 - 1] === a ||
        boardArray[1 - 1] === a && boardArray[4 - 1] === a && boardArray[7 - 1] === a ||
        boardArray[2 - 1] === a && boardArray[5 - 1] === a && boardArray[8 - 1] === a ||
        boardArray[3 - 1] === a && boardArray[6 - 1] === a && boardArray[9 - 1] === a ||
        boardArray[1 - 1] === a && boardArray[5 - 1] === a && boardArray[9 - 1] === a ||
        boardArray[3 - 1] === a && boardArray[5 - 1] === a && boardArray[7 - 1] === a) {
        alert (a + ' is the winner!')
        document.getElementById('restart').style.opacity = '1'
        document.getElementById('restart').addEventListener('click', clearBox)
        currentTurn = 'X'
    } else if (
      (square[0].innerHTML === 'X' || square[0].innerHTML === 'O') &&
      (square[1].innerHTML === 'X' || square[1].innerHTML === 'O') &&
      (square[2].innerHTML === 'X' || square[2].innerHTML === 'O') &&
      (square[3].innerHTML === 'X' || square[3].innerHTML === 'O') &&
      (square[4].innerHTML === 'X' || square[4].innerHTML === 'O') &&
      (square[5].innerHTML === 'X' || square[5].innerHTML === 'O') &&
      (square[6].innerHTML === 'X' || square[6].innerHTML === 'O') &&
      (square[7].innerHTML === 'X' || square[7].innerHTML === 'O') &&
      (square[8].innerHTML === 'X' || square[8].innerHTML === 'O')
    ) {
    alert ('It is a tie!')
    document.getElementById('restart').style.opacity = '1'
    document.getElementById('restart').addEventListener('click', clearBox)
    currentTurn = 'X'
    }
  }
  function clearBox (){
    for (var i = 0; i < square.length; i++) {
    square[i].innerHTML = ''
    }
    document.getElementById('restart').style.opacity = '0'
  }
  for (var i = 0; i < square.length; i++) {
  square[i].addEventListener("click", move)
  }
}
newGame()
