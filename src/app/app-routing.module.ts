import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPaisesComponent } from './vistas/lista-paises/lista-paises.component'
import { DetallePaisComponent } from './vistas/detalle-pais/detalle-pais.component'

const routes: Routes = [
  { path:'', redirectTo:'paises', pathMatch:'full' },
  { path:'paises', component:ListaPaisesComponent },
  { path:'detallePais/:pais', component:DetallePaisComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListaPaisesComponent,DetallePaisComponent]