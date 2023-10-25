import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ProductCardService } from 'src/app/core/services/product-card.service';
import { parseJson } from '../page/home-page.component';
import { ProductCard } from 'src/app/core/models/ProductCard';
import { Observable, Subject, Subscription, fromEvent, switchMap, takeUntil } from 'rxjs';
@Component({
  selector: 'app-home-auctions',
  templateUrl: './home-auctions.component.html',
  styleUrls: ['./home-auctions.component.scss',
              './../page/home-page.component.scss']
})
export class HomeAuctionsComponent implements OnInit, OnDestroy{
  constructor(private productCardService: ProductCardService) {}

  live_cards: ProductCard[] = [];
  itemsCount: number = 4;
  btn_view_more = 'View more';

  button = document.getElementById('btn_view_more') as HTMLButtonElement;
  unsubscribe$ = new Subject<void>()

  ngOnInit(): void {
    this.productCardService.getItems(this.itemsCount).subscribe((data) => {
      this.live_cards = parseJson<ProductCard>(data);
    });
  }

  fetchData() {
    this.productCardService.getItems(this.itemsCount)
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(data => {
      let newCards = parseJson<ProductCard>(data);
      this.live_cards = this.live_cards.concat(newCards);
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
