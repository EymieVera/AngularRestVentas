import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Rutas
import { APP_ROUTING } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { DatosComponent } from './componentes/datos/datos.component';
import { TemplateComponent } from './componentes/template/template.component';
import { ClienteComponent } from './componentes/ventas/cliente/cliente.component';
import { ProductoComponent } from './componentes/ventas/producto/producto.component';
import { FooterComponent } from './componentes/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DatosComponent,
    TemplateComponent,
    ClienteComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
