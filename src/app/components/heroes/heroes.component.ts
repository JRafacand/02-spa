//esta pagina se declarada todo lo que se usa en el html de heroes

import { Component, OnInit } from '@angular/core';
//importamos el servicio en el compomente heroes que es donde lo vamos a utilizar
import { HeroesService, Heroe } from '../../service/heroes.service';
//primero importe el router, luego creo la variable router:Router en el constructor
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
  })
export class HeroesComponent implements OnInit{
 //aqui se crear las variables para el ngOnInit
 heroes:Heroe[]=[]; 
 constructor(private _heroesService:HeroesService,
              private router:Router){

  }
  ngOnInit(){
    this.heroes = this._heroesService.getheroes();
    console.log(this.heroes)

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  verHeroe(idx:number){
    console.log(idx)
    this.router.navigate(['/heroe',idx])//aqui llamo mi arreglo de esta forma
  }
}
