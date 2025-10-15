import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../services/skills.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  // Aquí guardaremos las habilidades obtenidas de la API
  skills: any[] = [];  

  // Variables individuales para cada habilidad (sin usar ngFor)
  skill1Name: string = '';
  skill1Level: string = '';
  skill1Category: string = '';

  skill2Name: string = '';
  skill2Level: string = '';
  skill2Category: string = '';

  // ... (agregar más según el número de habilidades que quieras mostrar)

  constructor(private skillsService: SkillsService) { }

  // Al inicializar el componente, obtenemos las habilidades desde la API
  ngOnInit(): void {
    this.getSkills();  // Llamamos al método para obtener las habilidades
  }

  // Llamada al servicio para obtener todas las habilidades
  getSkills(): void {
    this.skillsService.getSkills().subscribe(
      (data) => {
        this.skills = data;  // Asignamos los datos obtenidos a la variable skills

        // Asignar valores a las variables individuales
        this.skill1Name = this.skills[0]?.name || '';
        this.skill1Level = this.skills[0]?.level || '';
        this.skill1Category = this.skills[0]?.category || '';

        this.skill2Name = this.skills[1]?.name || '';
        this.skill2Level = this.skills[1]?.level || '';
        this.skill2Category = this.skills[1]?.category || '';

        // Puedes seguir asignando manualmente las habilidades a las propiedades
      },
      (error) => {
        console.error('Hubo un error al obtener las habilidades', error);  // Manejo de errores
      }
    );
  }

  // Método para eliminar una habilidad
  deleteSkill(id: number): void {
    this.skillsService.deleteSkill(id).subscribe(
      () => {
        this.getSkills();  // Vuelve a cargar las habilidades después de eliminar
      },
      (error) => {
        console.error('Hubo un error al eliminar la habilidad', error);  // Manejo de errores
      }
    );
  }
}
