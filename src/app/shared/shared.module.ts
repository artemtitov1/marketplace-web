import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortDetailsCardComponent } from './components/short-details-card/short-details-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { NftCardComponent } from './components/nft-card/nft-card.component';
import { NftValueCardComponent } from './components/nft-value-card/nft-value-card.component';
import { DegreePrefixPipe } from './pipes/degree-prefix.pipe';
import { UserCollectionCardComponent } from './components/user-collection-card/user-collection-card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    ShortDetailsCardComponent,
    ProductCardComponent,
    BlogCardComponent,
    NftCardComponent,
    NftValueCardComponent,
    DegreePrefixPipe,
    UserCollectionCardComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ShortDetailsCardComponent,
    ProductCardComponent,
    BlogCardComponent,
    NftCardComponent,
    NftValueCardComponent,
    DegreePrefixPipe,
    UserCollectionCardComponent,
    ButtonComponent,
  ]
})
export class SharedModule { }
