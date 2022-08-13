import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isOpen: boolean = false;
  categories: Array<string> = new Array<string>();
  activeCategory: string = '';
  constructor(
    private gameService: GameService,
    private router: ActivatedRoute
  ) {
    this.categories = gameService.getCategories();
    this.router.params.subscribe((params) => {
      this.activeCategory = params['category'];
    });
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
