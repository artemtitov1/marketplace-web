import { Component, OnInit, Input } from '@angular/core';
import { ProductCard } from 'src/app/core/models/ProductCard';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input()
  info!: ProductCard;

  tag = 'Art';

  time_left!: string;

  ngOnInit(): void {
    this.updateTimeLeft()

    setInterval(() =>
      this.updateTimeLeft()
    , 1000);
  }

  countTimeLeft(expire_time: Date): number {
    return (expire_time.getTime() - Date.now());
  }

  updateTimeLeft() {
    let string_as_num = Date.parse(this.info.expire_date);
    this.time_left = this.msFormat(string_as_num);
  }

  msFormat(milliseconds: number): string {
    if (milliseconds <= 0) {
      return '';
    }
    
    const weeks = Math.floor(milliseconds / (7 * 24 * 60 * 60 * 1000));
    milliseconds %= 7 * 24 * 60 * 60 * 1000;

    const days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
    milliseconds %= 24 * 60 * 60 * 1000;

    const hours = Math.floor(milliseconds / (60 * 60 * 1000));
    milliseconds %= 60 * 60 * 1000;

    const minutes = Math.floor(milliseconds / (60 * 1000));
    milliseconds %= 60 * 1000;

    const seconds = Math.floor(milliseconds / 1000);

    const components = [];

    if (weeks > 0) {
      if (weeks > 1) {
        components.push(weeks + ' weeks');
      } else {
        components.push(weeks + ' week');
      }
    }

    if (days > 0) {
      if (days > 1) {
        components.push(days + ' days');
      } else {
        components.push(days + ' day');
      }
    }

    if (hours > 0) {
      if (hours > 1) {
        components.push(hours + ' hours');
      } else {
        components.push(hours + ' hour');
      }
    }

    if (minutes > 0) {
      if (minutes > 1) {
        components.push(minutes + ' minutes');
      } else {
        components.push(minutes + ' minute');
      }
    }

    if (seconds > 0) {
      if (seconds > 1) {
        components.push(seconds + ' seconds');
      } else {
        components.push(seconds + ' second');
      }
    }

    return components.slice(0, 2).join(', ');
  }
}
