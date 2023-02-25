import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';//con esto importo las parametros a mi url
import { HeroesService } from 'src/app/service/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
  heroe:any={};//creo la variable para agarre el get
  //aqui invoco las cosas en mi constructor declarando una variable y llamandolo luego de los :
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService){
    this.activatedRoute.params.subscribe(params=>{
      //console.log(params['id']);//este id viene del rpute la variable que se utilizp
    console.log(this.heroe,'heroe');
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe.nombre);
      console.log(params,'params');
          })//con esto me suscribo a utilizar mi activatedRoute
  }
} 
       


