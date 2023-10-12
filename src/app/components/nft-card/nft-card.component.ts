import { Component } from '@angular/core';
import { NFTCard } from '../../models/NFTCard';

@Component({
  selector: 'app-nft-card',
  templateUrl: './nft-card.component.html',
  styleUrls: ['./nft-card.component.scss']
})
export class NftCardComponent {
  nft: NFTCard = {
    id: 1,
    collectionTitle: 'CryptoPunks',
    title: 'Botties',
    owner: 'Top Dog #1234',
    price: 133.87,
    quantity: 1,
    from: 39690,
    to: 0,
    time: new Date(),
  }
}
