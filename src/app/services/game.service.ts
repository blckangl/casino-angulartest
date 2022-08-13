import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { GameDb } from 'src/config/game-db';
import { Game } from '../models/game';
import { Jackpot } from '../models/jackpot';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  gameDb: GameDb;

  group = ['ball', 'virtual', 'fun', 'other'];

  constructor() {
    this.gameDb = new GameDb();
  }

  getGames(category: string): Array<Game> {
    if (category == 'other') {
      return this.gameDb.getGamesByCategory(this.group);
    } else {
      return this.gameDb.getGamesByCategory([category]);
    }
  }
  getCategories(): Array<string> {
    let categories = this.gameDb.games
      .map((x) =>
        x.categories.filter(
          (cat) => cat != 'new' && cat != 'top' && !this.group.includes(cat)
        )
      )
      .flat()
      .filter((elem, index, self) => {
        return index === self.indexOf(elem);
      })
      .map(
        (x) => x.charAt(0).toUpperCase() + x.slice(1, x.length).toLowerCase()
      )
      .sort();

    return categories;
  }
}
