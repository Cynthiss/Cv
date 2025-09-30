import { Routes } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { JobsComponent } from './experience/jobs/jobs.component';
import { StudiesComponent } from './experience/studies/studies.component';

export const routes: Routes = [
  { path: 'about', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { 
    path: 'experience', 
    component: ExperienciaComponent,
    children: [
      { path: 'trabajo', component: JobsComponent },
      { path: 'estudios', component: StudiesComponent },
      { path: '', redirectTo: 'trabajo', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', redirectTo: '/about' }
];
