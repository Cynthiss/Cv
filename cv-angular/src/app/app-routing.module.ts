import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';  // Importa RouterModule y Routes
import { PerfilComponent } from './perfil/perfil.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';

const routes: Routes = [  // Aquí definimos las rutas de la aplicación
  { path: 'about', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienciaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'motivacion', component: MotivacionComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }  // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Utilizamos forRoot() solo en el módulo raíz
  exports: [RouterModule]
})
export class AppRoutingModule {}
