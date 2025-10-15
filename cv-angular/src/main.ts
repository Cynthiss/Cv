import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';  // Importa AppRoutingModule

bootstrapApplication(AppComponent, {
  providers: [
    AppRoutingModule,   // Importa AppRoutingModule aquí
  ]
})
  .catch(err => console.error(err));
