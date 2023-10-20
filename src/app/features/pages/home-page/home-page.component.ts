import { Component, OnInit } from '@angular/core';
import { ProductCard } from 'src/app/core/models/ProductCard';
import { ProductCardService } from 'src/app/core/services/product-card.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private svc: ProductCardService) {}
  live_cards: ProductCard[] = [];

  async ngOnInit() {
    this.svc.getProducts(4).subscribe((data) => {
      let JSON_cards = JSON.parse(JSON.stringify(data));
      this.live_cards = JSON_cards as ProductCard[];
    });
  }

  btn_explore = 'Explore';
  btn_create = 'Create';
  btn_view_more = 'View more';
  color_transparent = true;
}
