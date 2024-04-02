import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaModule } from './pagina/PaginaModule';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { VehiculoService } from './servicios/Vehiculo.service';
import { provideHttpClient } from '@angular/common/http';
import { UserIntereceptorService } from './pagina/interceptores/UserIntereceptor.service';
import { truncate } from 'fs';
import { ClientesModule } from './clientes/ClientesModule';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginaModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({ cookieName: 'My-Xsrf-Cookie', headerName: 'My-Xsrf-Header' }),
   ClientesModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserIntereceptorService, multi:true },
    provideClientHydration(),
  
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
