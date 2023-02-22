import { Component } from '@angular/core';
import { HeroesService } from 'src/app/service/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  })
export class NavbarComponent {
  constructor(private router:Router){
  }
  buscarHeroe(termino:string){
    this.router.navigate(['/srcheroe',termino])
    console.log(termino);
  }
}
