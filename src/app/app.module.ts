import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CrearAvisoComponent } from './components/crear-aviso/crear-aviso.component';
import { ModalEliminarComponent } from './components/modal-eliminar/modal-eliminar.component';
import { FechaPipe } from './pipes/fecha.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvisosComponent,
    CrearAvisoComponent,
    ModalEliminarComponent,
    FechaPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule {}
