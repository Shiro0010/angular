import { Component } from '@angular/core';
import { ObtenerInfo } from "../app/info-service.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'departamentos';
  constructor(private obtenerinfo:ObtenerInfo) {}
  public listado:any[] = []
  getNPGs(){
    this.obtenerinfo.obtener_info().subscribe(data =>{
      this.listado = data
      console.log(data);     
  })
}
}
