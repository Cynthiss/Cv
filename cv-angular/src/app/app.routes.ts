import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';

export const routes: Routes = [
  { path: 'about', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienciaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'motivacion', component: MotivacionComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }
];