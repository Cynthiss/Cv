import { Component } from '@angular/core';
import { StarPipe } from '../star.pipe';   // pipe
import { NgFor } from '@angular/common';   

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [StarPipe, NgFor], 
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  softSkills = ['Comunicación', 'Liderazgo', 'Trabajo en equipo'];
  lenguajesProgramacion = ['Java', 'Python', 'C#'];
  tecnologiasHerramientas = ['Git', 'Angular', 'Docker'];
}
