import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { ApiService } from '../../../services/api-service'; // Ajuste os ../ para chegar na pasta services
import { ClienteLogin } from '../../../models/cliente.model';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  usuario: ClienteLogin = {
    cliente_email: '',
    cliente_senha: ''
  };

  constructor(
    private apiService: ApiService,
    private router: Router
  ) {}

  fazerLogin() {
      console.log('Tentando login com:', this.usuario);

      // Chamando o seu serviço (ajuste o nome do método se necessário)
      this.apiService.login(this.usuario).subscribe({
        next: (res) => {
          alert('Bem-vindo ao JamesBarber!');
          // Aqui você usaria o Router para ir para a tela de agenda
        },
        error: (err) => alert('E-mail ou senha incorretos.')
      });
    }

    irParaCadastro() {
      // Aqui você enviaria o usuário para a rota de cadastro
      this.router.navigate(['/cadastro']);
    }
}
