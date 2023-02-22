import { Component } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-srcheroe',
  templateUrl: './srcheroe.component.html',
  styleUrls: ['./srcheroe.component.css']
})
export class SrcheroeComponent {
  heroesb:any={};
  //heroest:any={};
  constructor(private search:HeroesService,
              private activatedRoute: ActivatedRoute){
                this.activatedRoute.params.subscribe(params=>{
                //this.heroest=this._heroestService.getHeroe(params['id']);  
                this.heroesb=this.search.buscarHeroes(params['id']);
                  console.log(this.heroesb,'heroesb');
                  console.log(params,'params');
                })
                }
}
