import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  // Aquí puedes agregar cualquier propiedad que necesites para tu perfil
  nombre = 'Cynthia Michelle Santos Letona';
  titulo = 'Desarrolladora Web';
  descripcion = 'Apasionada por la tecnología y el desarrollo web moderno. Experiencia en frontend y backend, siempre aprendiendo y mejorando.';
  imagen = 'assets/CV.jpeg'; // Asegúrate de que la imagen esté en la carpeta assets
}
