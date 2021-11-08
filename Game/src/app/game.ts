export class Game {
  public gameFields: string[];

  constructor() {
    this.gameFields = [];
    for (let fieldCounter = 0; fieldCounter < 9; fieldCounter++) {
      this.gameFields.push("");
    }
  }

  public playerPutsOn(field: number): void {
    this.gameFields[field] = "X";
    this.game();
  }

  private game(): void {
    if (this.checkIsEndGame()) {
      let result = this.gameFields.includes("") ? "Játékos győzött! :)" :"Döntetlen!";
      this.endGame(result);
      return;
    }
    this.aiTurns();
    if (this.checkIsEndGame()) {
      this.endGame("Gép nyert! :(");
      return;
    }
  }

  public checkIsEndGame(): boolean {
    //Check same in row
    for (let field = 0; field <= 6; field++) {
      if (!this.gameFields[field]) {
        field += 2;
        continue;
      }
      if (this.gameFields[field] === this.gameFields[field + 1] && this.gameFields[field] === this.gameFields[field + 2])
        return true;
      field += 2;
    }

    //Check same in column
    for (let field = 0; field < 3; field++) {
      if (!this.gameFields[field]) continue;

      if (this.gameFields[field] === this.gameFields[field + 3] && this.gameFields[field] === this.gameFields[field + 6])
        return true;
    }

    //Check same in diagonal
    if (this.gameFields[4]) {
      if (this.gameFields[0] === this.gameFields[4] && this.gameFields[0] === this.gameFields[8])
        return true;
      if (this.gameFields[2] === this.gameFields[4] && this.gameFields[2] === this.gameFields[6])
        return true;
    }

    return !this.gameFields.includes("");
  }

  private aiTurns(): void {
    let choosenField = Math.floor(Math.random()*9);

    while (true) {

      if (!this.gameFields[choosenField]) {
        this.gameFields[choosenField] = "O";
        break;
      }

      choosenField = Math.floor(Math.random() * 9);
    }

  }

  private endGame(result: string): void{
    alert(result);
  }
}
