import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  softSkills: string[] = [
    'Comunicación efectiva', 'Trabajo en equipo', 'Resolución de problemas',
    'Gestión del tiempo', 'Adaptabilidad', 'Creatividad', 'Liderazgo', 'Pensamiento crítico'
  ];

  lenguajesProgramacion: string[] = ['Python', 'C#', 'C++', 'SQL'];

  tecnologiasHerramientas: string[] = ['Docker', 'Postman', 'Firebase', 'React.js', 'Node.js', 'GitHub', 'Mongo DB', 'AWS'];

  jobs: string[] = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];
}
