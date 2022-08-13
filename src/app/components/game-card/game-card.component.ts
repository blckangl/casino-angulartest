import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Jackpot } from 'src/app/models/jackpot';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss'],
})
export class GameCardComponent {
  @Input() jackpot!: Jackpot | null;
  @Input() game!: Game;

  @Input() ribbons: Array<string> = new Array<string>();
  constructor() {}
}
