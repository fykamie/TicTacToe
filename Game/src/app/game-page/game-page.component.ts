import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public result: string;
  public gameFields: string[];

  constructor() {
    this.gameFields = [];
    for (let fieldCounter = 0; fieldCounter < 9; fieldCounter++) {
      this.gameFields.push("");
    }
  }

  ngOnInit(): void {
  }

}
