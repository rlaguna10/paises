import { Injectable } from '@angular/core';
// import { ListaPaisesI } from '../../modelos/listapaises.interface';
// import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://restcountries.com/v3.1/";

  constructor(private http:HttpClient) {
    console.log('Funcionando servicio')
  }

  getAllPaises(){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "all";

    return this.http.get(direccion,{
      headers: header
    });
  }

  getDetallePais(pais: any){
    let header = new HttpHeaders().set('Type-content', 'aplication/json')
    let direccion = this.url + "name/" + pais;

    return this.http.get(direccion,{
      headers: header
    });
  }
}
