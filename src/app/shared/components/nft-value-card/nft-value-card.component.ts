import { Component } from '@angular/core';
import { NFTValue } from 'src/app/core/models/NFTValue';

@Component({
  selector: 'app-nft-value-card',
  templateUrl: './nft-value-card.component.html',
  styleUrls: ['./nft-value-card.component.scss']
})
export class NftValueCardComponent {
  nft: NFTValue = {
    id: 1,
    title: 'CryptoPunks',
    volume: 133871.43,
    day_change: 0.23,
    week_change: -0.15,
    floor_price: 133,
    owners: 3200,
    assets: 10000
  }
}
