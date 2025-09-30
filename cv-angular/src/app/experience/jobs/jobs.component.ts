import { Component } from '@angular/core';

@Component({
  selector: 'app-jobs',
  standalone: true,
  templateUrl: './jobs.component.html', // nombre correcto del archivo
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  trabajos = ['Frontend Dev', 'Backend Dev', 'Fullstack Dev'];
}
