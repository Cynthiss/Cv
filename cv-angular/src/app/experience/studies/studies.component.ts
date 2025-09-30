import { Component } from '@angular/core';

@Component({
  selector: 'app-studies',
  standalone: true,
  templateUrl: './studies.component.html', // nombre correcto
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  estudios = [
    'Licenciatura en Ingeniería en Ciencias de la Computación',
    'Bachillerato en Computación'
  ];
}
