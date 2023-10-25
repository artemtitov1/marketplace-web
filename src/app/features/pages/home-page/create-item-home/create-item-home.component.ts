import { Component, OnInit } from '@angular/core';
import { ShortDetails } from 'src/app/core/models/ShortDetails';
import { ShortDetailsService } from 'src/app/core/services/short-details.service';
import { parseJson } from '../page/home-page.component';
@Component({
  selector: 'app-create-item-home',
  templateUrl: './create-item-home.component.html',
  styleUrls: ['./create-item-home.component.scss',
              './../page/home-page.component.scss']
})
export class CreateItemHomeComponent implements OnInit{
  constructor(private shortDetailsService: ShortDetailsService) {}

  cards: ShortDetails[] = [];

  ngOnInit(): void {
    this.shortDetailsService.getItems(2).subscribe((data) => {
      this.cards = parseJson<ShortDetails>(data);
    });
  }
}
