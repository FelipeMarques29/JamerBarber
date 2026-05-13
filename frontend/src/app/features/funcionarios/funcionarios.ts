import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Navbar } from '../../shared/components/navbar/navbar';

interface Barbeiro {
  id: number;
  nome: string;
  especialidade: string;
  anosEstudo: number;
  fotoUrl: string;
  instagram: string;
}

@Component({
  selector: 'app-funcionarios',
  imports: [CommonModule, Navbar],
  templateUrl: './funcionarios.html',
  styleUrl: './funcionarios.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Funcionarios {
  readonly barbeiros = signal<Barbeiro[]>([
    {
      id: 1,
      nome: 'Marcos Silva',
      especialidade: 'Cortes clássicos & degradê',
      anosEstudo: 12,
      fotoUrl: 'https://i.pravatar.cc/800?img=12',
      instagram: '@marcos.barber',
    },
    {
      id: 2,
      nome: 'Rafael Costa',
      especialidade: 'Barba e navalha quente',
      anosEstudo: 8,
      fotoUrl: 'https://i.pravatar.cc/800?img=14',
      instagram: '@rafa.cortes',
    },
    {
      id: 3,
      nome: 'João Henrique',
      especialidade: 'Cortes modernos & fade',
      anosEstudo: 6,
      fotoUrl: 'https://i.pravatar.cc/800?img=57',
      instagram: '@joao.h.barber',
    },
    {
      id: 4,
      nome: 'Diego Almeida',
      especialidade: 'Pigmentação & disfarçados',
      anosEstudo: 10,
      fotoUrl: 'https://i.pravatar.cc/800?img=11',
      instagram: '@diego.master',
    },
    {
      id: 5,
      nome: 'Pedro Martins',
      especialidade: 'Combo Premium & atendimento VIP',
      anosEstudo: 15,
      fotoUrl: 'https://i.pravatar.cc/800?img=13',
      instagram: '@pedro.martins',
    },
    {
      id: 6,
      nome: 'Bruno Carvalho',
      especialidade: 'Sobrancelha & design facial',
      anosEstudo: 5,
      fotoUrl: 'https://i.pravatar.cc/800?img=67',
      instagram: '@bruno.style',
    },
  ]);
}
