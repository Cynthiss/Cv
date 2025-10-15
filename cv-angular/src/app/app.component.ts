import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  // Asegúrate de que AppRoutingModule esté importado
import { CommonModule } from '@angular/common';  // Necesario para los componentes standalone
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    PerfilComponent,
    SkillsComponent,
    EducacionComponent,
    ExperienciaComponent,
    ProyectosComponent,
    MotivacionComponent,
    AppRoutingModule  // Asegúrate de que AppRoutingModule esté importado aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
