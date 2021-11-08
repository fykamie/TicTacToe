import { Component, OnInit } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public game: Game;

  constructor() {
    this.game = new Game();
  }

  ngOnInit(): void {
  }

}
