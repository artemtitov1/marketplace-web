import { Component, OnInit } from '@angular/core';
import { ShortDetails } from 'src/app/core/models/ShortDetailsCard';
import { ShortDetailsService } from 'src/app/core/services/short-details.service';
import { parseJson } from 'src/app/features/pages/home-page/page/home-page.component'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: [
    './../page/home-page.component.scss',
    './hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(private shortDetailsService: ShortDetailsService) {}

  hero_short_cards: ShortDetails[] = [];

  btn_explore = 'Explore';
  btn_create = 'Create';

  color_transparent = true;

  async ngOnInit() {
    this.shortDetailsService.getItems(2).subscribe((data) => {
      this.hero_short_cards = parseJson<ShortDetails>(data);
    });
  }
}
