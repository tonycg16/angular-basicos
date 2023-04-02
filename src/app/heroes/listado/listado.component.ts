import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes : string[] = ['Spiederma','Ironman','Hulk','Thor','Capt America'];
  v_txt_heroe_borrado: string = '' ;

  borrarHeroe(){
    console.log('borrrando...')
    const heroeBorrado = this.heroes.shift();
    this.v_txt_heroe_borrado = heroeBorrado ||'' 
    console.log(heroeBorrado)
  }
}
