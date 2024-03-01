import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadClientesComponent } from './cad-clientes/cad-clientes.component';

const routes: Routes = [
  { path: 'cad-clientes', component: CadClientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
