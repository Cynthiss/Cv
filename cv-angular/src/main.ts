import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';  // Asegúrate de importar AppRoutingModule

bootstrapApplication(AppComponent, {
  providers: [AppRoutingModule]  // Este es el único lugar donde usamos forRoot()
})
  .catch(err => console.error(err));
