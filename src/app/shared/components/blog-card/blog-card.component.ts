import { Component } from '@angular/core';
import { BlogCard } from 'src/app/core/models/BlogCard';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent {
  info: BlogCard = {
    id: 1,
    title: 'The Rusty Robots',
    description: `Intriguing new NFTs from the likes of Joey
                  Khamis, OG:Crystals, Alethea, Yonat Vaks,
                  NFT-V Miami, and Roe Ethridge.`,
    date: new Date('2022-10-15'),
    tag: 'Spotlight'
  }
}
