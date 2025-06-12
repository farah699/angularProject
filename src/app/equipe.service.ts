import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {
  private apiUrl = 'http://localhost:3000/equipes';

  constructor(private http: HttpClient) {}

  getEquipes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}