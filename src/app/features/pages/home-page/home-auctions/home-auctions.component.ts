import { Component, OnInit } from '@angular/core';
import { ProductCardService } from 'src/app/core/services/product-card.service';
import { parseJson } from '../page/home-page.component';
import { ProductCard } from 'src/app/core/models/ProductCard';
@Component({
  selector: 'app-home-auctions',
  templateUrl: './home-auctions.component.html',
  styleUrls: ['./home-auctions.component.scss',
              './../page/home-page.component.scss']
})
export class HomeAuctionsComponent implements OnInit{
  constructor(private productCardService: ProductCardService) {}

  live_cards: ProductCard[] = [];

  btn_view_more = 'View more';

  ngOnInit(): void {
    this.productCardService.getItems(4).subscribe((data) => {
      this.live_cards = parseJson<ProductCard>(data);
    });
  }
}
