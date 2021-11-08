import { Injectable } from '@angular/core';
import { BoardConventer } from './board-conventer';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private boardConverter: BoardConventer;


  constructor() {
    this.boardConverter = new BoardConventer();
  }

  public async saveBoard(name: string, boardArray: string[]) {
    let board = this.boardConverter.boardToGameObject(name, boardArray);

    return fetch("localhost:3000/api/boards", {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ board: board })
    }).then(response => {
      if (response.ok) return true;
      if (response.status == 400) {
        alert("Bad request");
        return false;
      }
      if (response.status == 409) {
        alert("Már létező játék név!");
        return false;
      }
      if (response.status == 412) {
        alert("Játékos és számítógép egy mezőre lépett!");
        return false;
      }
      alert(`${response.status} - ${response.statusText}`);
      return false;
    }).catch(error => {
      console.log(error);
      alert("Error!");
    });

  }
}
