import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import necesario para router-outlet

interface Experiencia {
  periodo: string;
  empresa: string;
  puesto: string;
}

@Component({
  selector: 'app-experiencia',
  standalone: true,
  imports: [RouterModule], // Permite usar <router-outlet>
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent {
  experiencias: Experiencia[] = [
    {
      periodo: '2024 – 2025',
      empresa: 'Tech Solutions S.A.',
      puesto: 'Desarrolladora Frontend'
    },
    {
      periodo: '2023 – 2024',
      empresa: 'Innovación Digital',
      puesto: 'Practicante de Desarrollo'
    }
  ];
}
