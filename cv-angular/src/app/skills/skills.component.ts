import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  softSkills: string[] = [
    'Comunicación efectiva',
    'Trabajo en equipo',
    'Resolución de problemas',
    'Gestión del tiempo',
    'Adaptabilidad',
    'Creatividad',
    'Liderazgo',
    'Pensamiento crítico'
  ];

  lenguajesProgramacion: string[] = [
    'Python',
    'C#',
    'C++',
    'SQL'
  ];

  tecnologiasHerramientas: string[] = [
    'Docker',
    'Postman',
    'Firebase',
    'React.js',
    'Node.js',
    'GitHub',
    'Mongo DB',
    'AWS'
  ];
}
