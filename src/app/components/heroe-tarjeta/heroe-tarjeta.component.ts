import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
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

constructor(private router:Router){
 
}
ngOnInit(){
    
}
verHeroe(){
console.log(this.flecha)
this.router.navigate(['/heroe',this.flecha])
}
}
