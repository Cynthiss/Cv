import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { MotivacionComponent } from './motivacion/motivacion.component';  // Asegúrate de importar MotivacionComponent

const routes: Routes = [
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'motivacion', component: MotivacionComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }  // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
