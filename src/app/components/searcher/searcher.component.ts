import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  
})
export class SearcherComponent implements OnInit {

  heroes:any[] = []
  termino:string = '';

  constructor(private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService) { 

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino']
      this.heroes = this.heroesService.buscarHeroes(params['termino'])
      console.log(this.heroes)
    })
  }

}
