import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ApiService } from './services/api-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})

export class AppComponent implements OnInit {
  title = 'JamesBarber';

  constructor(private apiService: ApiService) {}


  ngOnInit() {
    // Mantive aqui para testar assim que a página carregar também
    console.log('Página carregada, testando conexão automática...');
  }
}
