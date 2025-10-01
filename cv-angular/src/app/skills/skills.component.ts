import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ReversePipe } from '../reverse-pipe'; // <-- importante

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ReversePipe], // <-- aquí
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  softSkills = this.dataService.softSkills;
  lenguajesProgramacion = this.dataService.lenguajesProgramacion;
  tecnologiasHerramientas = this.dataService.tecnologiasHerramientas;

  constructor(private dataService: DataService) {}
}
