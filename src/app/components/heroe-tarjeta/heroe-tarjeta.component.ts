import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// para ouput se debe llamar Output, EventEmitter en el import
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css'],
  })
  
export class HeroeTarjetaComponent {
//implementando input
@Input() heroe: any={};
//para ver el indice del input
@Input() flecha: number;

@Output() heroeSelec: EventEmitter<number>;
constructor(private router:Router){
  this.heroeSelec= new EventEmitter();
 
}
ngOnInit(){
    
}
verHeroe(){
  //heroes es el padre, heroe el hijo, con Ouput vamos a llamar cosas del Padre al hijo
 this.router.navigate(['/heroe',this.flecha]);
    //console.log(this.flecha,'flecha',this.heroe,'heroe');
  //this.heroeSelec.emit(this.flecha);
}
}
