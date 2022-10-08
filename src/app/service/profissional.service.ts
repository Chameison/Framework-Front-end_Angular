import { ICrudService } from './i-crud-service';
import { Injectable } from '@angular/core';
import { Profissional } from '../model/profissional';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService implements ICrudService<Profissional> {
 // os metodos e as classes foram criada, vamos criar posteriomente os componentes para
  constructor() { }
  apiUrl: string = '';
  get(termoBusca?: string): Observable<Profissional[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Observable<Profissional[]> {
    throw new Error('Method not implemented.');
  }
  insert(objeto: Profissional): Observable<Profissional[]> {
    throw new Error('Method not implemented.');
  }
  update(objeto: Profissional): Observable<Profissional[]> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
