export class BoardConventer {
  boardToGameObject(boardName: string, board: string[]): object {
    const gameStatus = {
      boardSize: 3,
      boardName,
      usersCells: [],
      computersCells: [],
    }

    board.forEach((field, index) => {
      let cell = {
        col: index % 3,
        row: Math.floor(index / 3)
      }
      if (field === 'X') gameStatus.usersCells.push(cell);
      if (field === 'O') gameStatus.computersCells.push(cell);
    });

    return gameStatus;
  }

}
