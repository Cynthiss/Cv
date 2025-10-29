import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';  // Asegúrate de que la ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  repos: any[] = [];
  error: string = '';

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {
    this.githubService.getRepos().subscribe(
      (data: any[]) => {
        console.log('Proyectos GitHub:', data);  // Ver los proyectos en la consola
        this.repos = data.slice(0, 3);  // Muestra los primeros 3 proyectos
      },
      (error) => {
        console.error('Error al obtener los proyectos de GitHub:', error);  // Muestra el error en consola
        this.error = 'Hubo un problema al cargar los proyectos';  // Mensaje de error en la UI
      }
    );
  }
}
