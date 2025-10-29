import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';  // Importa el componente Proyectos
import { MotivacionComponent } from './motivacion/motivacion.component';  // Importa el componente Motivación
import { CommonModule } from '@angular/common';  // Asegúrate de incluir CommonModule

@Component({
  selector: 'app-root',
  standalone: true,  // Si estás usando standalone components
  imports: [
    CommonModule,  // Importa CommonModule para que funcione en componentes standalone
    HeaderComponent,
    PerfilComponent,
    SkillsComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,  // Agrega ProyectosComponent
    MotivacionComponent  // Agrega MotivacionComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
