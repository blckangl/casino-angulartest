import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public selectedCategory: string = '';
  public games: Array<Game> = new Array<Game>();
  constructor(
    private router: ActivatedRoute,
    private gameService: GameService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.selectedCategory = params['category'];
      this.selectedCategory = this.selectedCategory.toLowerCase();
      if (this.selectedCategory) {
        this.games = this.gameService.getGames(this.selectedCategory);
      }
    });
  }
}
