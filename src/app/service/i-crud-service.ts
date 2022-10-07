import { Observable } from "rxjs";

export interface ICrudService<T> {

  apiUrl: string;


  get(termoBusca?: string): Observable<T[]>; //aceita que utilize o metodo de duas formas,
  getById(id: number): Observable<T[]>;
  insert(objeto: T): Observable<T[]>;
  update(objeto: T): Observable<T[]>;
  delete(id: number): Observable<void>;
}
