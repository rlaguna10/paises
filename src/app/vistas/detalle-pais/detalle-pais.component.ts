import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.css']
})
export class DetallePaisComponent implements OnInit {

  pais: any;
  public detallePais: Array<any> = [];

  constructor(private activerouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  ngOnInit(): void {
    this.pais = this.activerouter.snapshot.paramMap.get('pais');
    console.log(this.pais)
    this.api.getDetallePais(this.pais).subscribe((resp: any)=>{
      console.log(resp);
      this.detallePais = resp;
    });
  }

}
