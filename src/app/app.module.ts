import { ObjToArrayPipe } from './vistas/lista-paises/objToArray.pipe';
import { FilterPipe } from './vistas/lista-paises/filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './plantillas/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ObjToArrayPipe,
    FilterPipe,
    routingComponents,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
