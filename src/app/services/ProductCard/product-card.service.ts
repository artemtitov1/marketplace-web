import { Injectable } from '@angular/core';
import { PathLike } from 'fs';
import { ProductCard } from 'src/app/models/ProductCard';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductCardService {

  constructor(private http: HttpClient) { }

private static id = 1;

private getRandomLine(filename: string): Promise<any>{
  return this.http.get(filename, {responseType: 'text'})
  .toPromise()
  .then(text => {
    const lines = text!.split('\n');
    const randomIndex = Math.floor(Math.random() * lines.length);
    return lines[randomIndex];
  });
}

private getRandomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

private async getRandomDecimal(start: number, end: number): Promise<number> {
  return Math.random() * (end - start);
}

private async getRandomInteger(start: number, end: number): Promise<number> {
  return Math.round(Math.random() * (end - start))
}

  async generate(count = 1): Promise<ProductCard[]> {
    let cards: ProductCard[] = [];
    for(let i = 0; i < count; i++) {
      let card: ProductCard = {
        id: ProductCardService.id,
        owner: this.getRandomLine('src/app/data/names.txt'),
        title: this.getRandomLine('src/app/data/names.txt'),
        expire_date: this.getRandomDate(new Date(), new Date(2024, 1, 1)),
        highest_bid: this.getRandomDecimal(1, 100),
        likes: this.getRandomInteger(1, 100000)
      }
      ProductCardService.id++;
      cards.push(card);
    }
    return cards;
  }
}
