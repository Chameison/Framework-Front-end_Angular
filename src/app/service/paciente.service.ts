import { ICrudService } from './i-crud-service';
import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService implements ICrudService<Paciente> {

  constructor(
    private http: HttpClient
  ) { }
  apiUrl: string = '';
  get(termoBusca?: string): Observable<Paciente[]> {
    let url = this.apiUrl;
    if ( termoBusca) {
      url += 'busca/' + termoBusca;
    }
    return this.http.get<Paciente[]>(url);
  }
  getById(id: number): Observable<Paciente[]> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Paciente): Observable<Paciente[]> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Paciente): Observable<Paciente[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
