import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.css']
})
export class ListaPaisesComponent implements OnInit {

  public paises: Array<any> = [];
  public page!: number;
  public filterPost = '';

  constructor(private api:ApiService, private router:Router) { 
    this.api.getAllPaises().subscribe((resp: any)=>{
      //console.log(resp);
      this.paises = resp;
    });
  }

  //data = Object.values(this.language);

  ngOnInit(): void {
    // this.api.getAllPaisesPrueba().subscribe(data => {
    //   console.log(data)
    // })
  }

  verDetalle(pais: any){
    //console.log(pais);
    this.router.navigate(['detallePais', pais]);
  }


}
