import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { Jackpot } from 'src/app/models/jackpot';
import { JackpotService } from 'src/app/services/jackpot.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  @Input() games!: Array<Game>;
  @Input() activeCategory!: string;

  jackpots: Array<Jackpot> = new Array<Jackpot>();

  constructor(private jackpotsService: JackpotService) {}
  ngOnInit(): void {
    this.jackpotsService.getJackpots().subscribe((pots) => {
      this.jackpots = pots;
      console.log('value changed to');
    });
  }

  getJackPotById(id: string): Jackpot | null {
    return this.jackpots.filter((jack) => jack.game == id)[0];
  }
  getRibbons(game: Game): Array<string> {
    return game.categories.filter(
      (g) =>
        (g == 'new' && this.activeCategory != 'new') ||
        (g == 'top' &&
          this.activeCategory != 'top' &&
          this.activeCategory != 'slots')
    );
  }
}
