import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AvisosComponent } from './components/avisos/avisos.component';
import { CrearAvisoComponent } from './components/crear-aviso/crear-aviso.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'avisos',
    pathMatch: 'full'
  },
  {
    path: 'avisos',
    component: AvisosComponent
  },
  {
    path: 'crear-aviso',
    component: CrearAvisoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
