import { Component, Input } from '@angular/core';
import { ShortDetails } from 'src/app/core/models/ShortDetails';

@Component({
  selector: 'app-short-details-card',
  templateUrl: './short-details-card.component.html',
  styleUrls: ['./short-details-card.component.scss']
})
export class ShortDetailsCardComponent {
  @Input()
  data!: ShortDetails;
}
