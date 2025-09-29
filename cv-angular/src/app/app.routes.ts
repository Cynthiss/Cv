import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';

export const routes: Routes = [
  { path: 'about', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienciaComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];
