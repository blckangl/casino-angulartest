import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable, timer } from 'rxjs';
import { JackpotsDb } from 'src/config/jackpots-db';
import { Jackpot } from '../models/jackpot';

@Injectable({
  providedIn: 'root',
})
export class JackpotService {
  private jackpotsDb: JackpotsDb = new JackpotsDb();
  private jackpots: BehaviorSubject<Array<Jackpot>>;
  private jackpots$: Observable<Array<Jackpot>>;
  constructor() {
    this.jackpots = new BehaviorSubject(this.jackpotsDb.getJackpots());

    this.jackpots$ = this.jackpots.asObservable();

    setInterval(() => {
      let newJackpots: Array<Jackpot> = this.jackpotsDb
        .getJackpots()
        .map((pot) => {
          let newPot: Jackpot = {
            game: pot.game,
            amount: pot.amount + Math.floor(Math.random() * 10),
          };
          return newPot;
        });
      this.jackpots.next(newJackpots);
    }, 2000);
  }

  getJackpots(): Observable<Array<Jackpot>> {
    return this.jackpots$;
  }
}
