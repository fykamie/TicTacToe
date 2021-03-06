import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Game } from '../game';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit {
  public game: Game;
  public gameName: { isValid, name };

  constructor(private modalService: NgbModal, private sv: ServerService) {
    this.gameName = {
      isValid: false,
      name: ""
    };
    this.game = new Game();
  }

  ngOnInit(): void {
  }

  open(content): void {
    this.modalService.open(content);
  }

  validateGameName(): void {
    this.gameName.isValid = this.gameName.name && !this.gameName.name.includes(" ") && this.gameName.name.length < 51;
  }

  isEmptyBoard(): boolean {
    return !(this.game.gameFields.includes("X"));
  }

  saveGame(): void {
    this.sv.saveBoard(this.gameName.name, this.game.gameFields);
  }
}
