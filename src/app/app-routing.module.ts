import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './componentes/lancamentos/lancamentos.component';
import { LoginComponent } from './componentes/login/login.component';
import { AutenticacaoGuard } from './autenticacao.guard';

const routes: Routes = [
  {
    path: "",
    component: LancamentosComponent,
    canActivate: [ AutenticacaoGuard ]
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
