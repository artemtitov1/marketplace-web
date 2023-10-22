import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShortDetails } from '../models/ShortDetailsCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShortDetailsService {

  constructor(private http: HttpClient) {}

  getItems(count: number): Observable<ShortDetails[]> {
    return this.http.get<ShortDetails[]>(`https://localhost:7261/ShortDetails?count=${count}`);
  }
}
