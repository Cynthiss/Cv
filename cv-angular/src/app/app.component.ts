import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';  // Importa MotivacionComponent
import { CommonModule } from '@angular/common';  // Necesario para standalone components
import { AppRoutingModule } from './app-routing.module';  // Importa el módulo de rutas

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,  // Necesario para los componentes standalone
    HeaderComponent,
    PerfilComponent,
    SkillsComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,  // Importa ProyectosComponent
    MotivacionComponent,  // Importa MotivacionComponent
    AppRoutingModule  // Asegúrate de incluir el módulo de rutas
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
