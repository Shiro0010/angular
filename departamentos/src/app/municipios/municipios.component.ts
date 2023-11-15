import { Component } from '@angular/core';
import { ObtenerInfo } from "../info-service.service";
@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent {
  lista:any[] = []
  constructor(private que:ObtenerInfo){}
  obtener_infow(){
    this.que.obtener_info().subscribe(result =>{
      console.table(result)
    })
  }
}

