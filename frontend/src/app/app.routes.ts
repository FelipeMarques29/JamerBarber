import { Routes } from '@angular/router';
import { Login } from './componentes/acesso/login/login'; // Ajuste o caminho para o seu arquivo de login
import { Cadastro } from './componentes/acesso/cadastro/cadastro';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'cadastro', component: Cadastro }, // O 'path' deve ser exatamente 'cadastro'
  { path: '**', redirectTo: '' }
];
