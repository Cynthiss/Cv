import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../services/quotes.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-motivacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motivacion.component.html',
  styleUrls: ['./motivacion.component.css']
})
export class MotivacionComponent implements OnInit {
  quote: string = '';  // Contenido de la cita
  author: string = ''; // Autor de la cita

  constructor(private quotesService: QuotesService) {}

  ngOnInit(): void {
    this.quotesService.getQuote().subscribe(
      (data) => {
        this.quote = data.quoteText;  // Asignamos la cita
        this.author = data.quoteAuthor;  // Asignamos el autor
      },
      (error) => {
        console.error('Error al obtener la frase:', error);
      }
    );
  }
}
