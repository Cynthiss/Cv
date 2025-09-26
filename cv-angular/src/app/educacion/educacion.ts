import { Component } from '@angular/core';

interface Educacion {
  anio: number;
  institucion: string;
  titulo: string;
}

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {
  educaciones: Educacion[] = [
    {
      anio: 2023,
      institucion: 'Universidad Francisco Marroquín',
      titulo: 'Licenciatura en Ingeniería en Ciencias de la Computación'
    },
    {
      anio: 2022,
      institucion: 'Colegio Valle del Saber',
      titulo: 'Bachiller en computación con orientación científica'
    }
  ];
}
