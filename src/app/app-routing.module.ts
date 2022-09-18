import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosFinancierosComponent } from './datos-financieros/datos-financieros.component';
import { PortadaComponent } from './portada/portada.component';
import { ResultadoComponent } from './resultado/resultado.component';

const routes: Routes = [
  {
    path: '',
    component: PortadaComponent
  },
  {
    path: 'datos',
    component: DatosFinancierosComponent
  },
  {
    path: 'resultados',
    component: ResultadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
