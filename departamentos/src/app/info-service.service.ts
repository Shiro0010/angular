import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, throwError } from 'rxjs';
import * as e from 'express';

@Injectable({
  providedIn: 'root'
})
export class ObtenerInfo {

  constructor(private http: HttpClient) {
  
  }
  obtener_info():Observable <any>{
    return this.http.get("https://www.datos.gov.co/resource/xdk5-pm3f.json")
                    .pipe(
                      catchError((e) => {
                        return throwError(e)
                      })
                    )
  }
   
}   
