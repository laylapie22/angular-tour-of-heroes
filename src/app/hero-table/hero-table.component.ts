import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-table',
  templateUrl: './hero-table.component.html',
  styleUrls: ['./hero-table.component.css']
})
export class HeroTableComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.heroService.getHeroes().
      subscribe(heroes => this.heroes = heroes);
  }


}