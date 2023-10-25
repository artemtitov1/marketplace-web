import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductCard } from 'src/app/core/models/ProductCard';
import { ProductCardService } from 'src/app/core/services/product-card.service';
import { parseJson } from '../page/home-page.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-explore-home',
  templateUrl: './explore-home.component.html',
  styleUrls: ['./explore-home.component.scss',
              './../page/home-page.component.scss']
})
export class ExploreHomeComponent implements OnInit, OnDestroy {
  constructor(private productCardService: ProductCardService) { }

  cards: ProductCard[] = [];
  itemsCount = 8;
  button = document.getElementById('btn_view_more') as HTMLButtonElement;
  unsubscribe$ = new Subject<void>()

  ngOnInit(): void {
    this.productCardService.getItems(8).subscribe((data) => {
      this.cards = parseJson<ProductCard>(data);
    });
  }

  fetchData() {
    this.productCardService.getItems(this.itemsCount)
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe(data => {
      let newCards = parseJson<ProductCard>(data);
      this.cards = this.cards.concat(newCards);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
