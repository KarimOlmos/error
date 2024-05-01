import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',

})
export class ListPageComponent  implements OnInit{

  public heroes: Hero[] = [];

  constructor(private heroesService: HeroService){}
  ngOnInit(): void {
    this.heroesService.getHeroes()
    .subscribe( heroes => this.heroes = heroes);
  }

}
