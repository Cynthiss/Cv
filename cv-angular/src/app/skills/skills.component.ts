import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  softSkills: string[] = [];
  lenguajesProgramacion: string[] = [];
  tecnologiasHerramientas: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.softSkills = this.dataService.softSkills;
    this.lenguajesProgramacion = this.dataService.lenguajesProgramacion;
    this.tecnologiasHerramientas = this.dataService.tecnologiasHerramientas;
  }
}
