import { Jackpot } from 'src/app/models/jackpot';

export class JackpotsDb {
  jackPots: Array<Jackpot> = [
    {
      game: 'NEJACKANDTHEBEANSTALK',
      amount: 10827,
    },
    {
      game: 'LEPABLOPICASSOSLOT',
      amount: 5197,
    },
    {
      game: 'NEFLOWERS',
      amount: 3248,
    },
    {
      game: 'NESTARBURST',
      amount: 16240,
    },
    {
      game: 'NEALIENS',
      amount: 9280,
    },
    {
      game: 'NETHEWISHMASTER',
      amount: 5413,
    },
    {
      game: 'XGMONEYSPINNER',
      amount: 3248,
    },
    {
      game: 'BSTHEEXTERMINATOR',
      amount: 4640,
    },
    {
      game: 'NYXSUPERMAN',
      amount: 1511,
    },
    {
      game: 'NYXTHEFLASH',
      amount: 12992,
    },
    {
      game: 'NYXWONDERWOMAN',
      amount: 5413,
    },
  ];

  getJackpots(): Array<Jackpot> {
    return this.jackPots;
  }
}
