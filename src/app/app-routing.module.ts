import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [

  {
    path: '', //rota do 4200
    redirectTo: 'listarPensamento', //padrão pro componente listarPensamento
    pathMatch: 'full' // considera todo a url
  },

  {
    path: 'criarPensamento',
    component: CriarPensamentoComponent
  },

  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
