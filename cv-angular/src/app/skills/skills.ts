import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  softSkills = [
    'Comunicación efectiva',
    'Trabajo en equipo',
    'Resolución de problemas',
    'Gestión del tiempo',
    'Adaptabilidad',
    'Creatividad',
    'Liderazgo',
    'Pensamiento crítico'
  ];

  lenguajesProgramacion = [
    'Python',
    'C#',
    'C++',
    'SQL'
  ];

  tecnologiasHerramientas = [
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
