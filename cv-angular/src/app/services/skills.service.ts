import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Skill {
  id: number;
  name: string;
  level: string;
  category: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private apiUrl = 'http://localhost:3001/skills'; // URL de la API de Express

  constructor(private http: HttpClient) { }

  // Obtener todas las habilidades
  getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.apiUrl);
  }

  // Obtener habilidad por ID
  getSkillById(id: number): Observable<Skill> {
    return this.http.get<Skill>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva habilidad
  createSkill(skill: Skill): Observable<Skill> {
    return this.http.post<Skill>(this.apiUrl, skill);
  }

  // Actualizar una habilidad existente
  updateSkill(id: number, skill: Partial<Skill>): Observable<Skill> {
    return this.http.patch<Skill>(`${this.apiUrl}/${id}`, skill);
  }

  // Eliminar una habilidad
  deleteSkill(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
