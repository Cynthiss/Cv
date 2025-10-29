import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  nombre: string = 'Cynthia Michelle Santos Letona';
  titulo: string = 'Desarrolladora Web';
  descripcion: string = 'Apasionada por la tecnología y el desarrollo web moderno. Experiencia en frontend y backend, siempre aprendiendo y mejorando.';
  imagen: string = 'assets/CV.jpeg';
}
