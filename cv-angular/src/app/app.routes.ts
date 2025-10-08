import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';  // Importa MotivacionComponent

export const routes: Routes = [
  { path: 'about', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienciaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'motivacion', component: MotivacionComponent },  // Ruta para la sección de Motivación
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];
