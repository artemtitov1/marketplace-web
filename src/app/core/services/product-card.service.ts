import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductCard } from 'src/app/core/models/ProductCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductCardService {

  constructor(private http: HttpClient) { }

  getItems(count: number): Observable<ProductCard[]> {
    return this.http.get<ProductCard[]>(`https://localhost:7261/Product?count=${count}`);
  }

}
